// 并非都是奇偶数

function isOld(num) {
  return num % 2 === 1
}

function isEven(num) {
  return num % 2 === 0
}
function isSance(num) {
  return isEven(num) || isOld(num)
}

var values = [7,4,'13',-9,Infinity]

values.map(isSance)