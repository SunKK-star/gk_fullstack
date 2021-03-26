// 一个整数数组 A，找到每个元素：右边第一个比我小的下标位置，没有则用 -1 表示。
//输入：[5, 2]
//输出：[1, -1]

const findRigthtSmall = (nums) => {
  let stack = []; // 单调递增栈
  let ans = []; // 取各个元素右边小于自身的第一个元素的下标
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      let cur = stack.pop();
      ans[cur] = i
    }
    stack.push(i);
  }
  for (let j = 0; j < nums.length; j++) {
    if (ans[j] === undefined) {
      ans[j] = -1
    }
  }
  return ans
}

let arr = [1,2,4,9,4, 0, 5]
console.log(findRigthtSmall(arr));