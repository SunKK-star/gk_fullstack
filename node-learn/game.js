// 石头剪刀布
// console.log(process.argv);

var playAction = process.argv[process.argv.length - 1]
// console.log(playAction);

// 电脑随机生成三个
var random = Math.random() * 3
if (random < 1) {
  var computerAction = 'rock'
} else if (random > 2) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'parper'
}

// 进行比较
if (computerAction == playAction) {
  console.log('平局');
} else if (computerAction === 'rock' && computerAction === 'rock') {
  return
}