let arr = [1,2,3]
arr.map(x => {
  return x + 1
}) 
const add1 = x => {
  return x + 1
}
arr.map(add1)
console.log(arr.map(parseInt));
parseInt(1,0)
parseInt(2,1)
parseInt(3,2)
// 把 xxx 进制的字符串转化为 10进制的 整型
parseInt('1100', 2) // 12

