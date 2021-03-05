// f(x) = Math.min((f(sum -c1) + 1), (f(sum -c2) + 1),...., (f(sum -cn) + 1))
// f(y) = 
const changeCoins = (coins, amount) => {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity;
    // 循环遍历每个可用的硬币面额
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }
  // let help = (coins, amount) => {
  //   coins.reducer((pre, cur) => {
  //     if((amount - cur + 1) < pre) {
  //       return amount - cur + 1
  //     }else {
  //       return pre
  //     }
  //   }, Infinity)
  // }
  if (f[amount] === Infinity) return -1
  return f[amount]
}