
// 获取进程的标准输入
let count = 0 
process.stdin.on('data', e => {
  const playAction = e.toString().trim() // 去除两边空格
  const result = game(playAction)
  if(result == -1) {
    count++
  }
  if(count === 3) {
    console.log('不跟你完了');
    process.exit() // 结束进程
  }
})