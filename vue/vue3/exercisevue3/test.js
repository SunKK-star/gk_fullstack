// 实现一个快速排序
let quickSort = (arr) => {
  if(arr.length <= 1) return arr
  let left = [];
  let right = [];
  let cur = arr.pop()
  arr.forEach(item => {
    item > cur ? right.push(item) : left.push(item)
  })
  return [...quickSort(left),cur,...quickSort(right)]
}
let arr = [1,25,84,1515,1,2,3,5,10,5,6,9]
console.log(quickSort(arr));