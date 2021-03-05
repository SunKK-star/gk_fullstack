// 假设你正在爬楼梯，需要n阶你才能到达楼顶，每次你可以爬一个或2个楼梯，
// 你有多少中方法可以爬到楼顶

// n = 2
// 1 + 1
// 2

// n = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// 给出到达某个目的的解法个数或者说是方案的个数
// 倒着分析问题：1. 定位到问题的终点。2. 站在终点的视角，来思考后退的可能性
// f{n} = f{n - 1} + f{n - 2}
// f{n - 1} = f{n - 2} + f{n - 3}
// f{n - 2} = f{n - 3} + f{n - 4}

// const f = []
// const solution = (n) => {
//   let help = (n) => {
//     if(n === 1) return 1 
//     if(n === 2) return 2
//     // 递归中的记忆化搜索
//     if(!f[n]) {
//       f[n] = help(n - 1) + help(n - 2)
//     }
//     return f[n]
//   }
//   return help(n)
// }
// 基于树形结构解题

const solution = (n) => {
  // 初始化状态数组
  const f = [];
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <=n; i++) {
    // 状态转移方程
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
}

console.log(solution(100));


