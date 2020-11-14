let sortByBits = function(arr) {
  // 遍历数组每一项，将每一项转化为为二进制数
  // 判断二进制数中1的个数
  

  // 拿到数组中每一项相应二进制数的1的个数
  // 根据1的个数及项的值的大小排序
  function getNum(x) {
    let count = 0
    let rem
    if(x == 0) return 0
    while(x > 0) {
      rem = Math.floor(x % 2)
      if(rem == 1) count++
      x = Math.floor(x / 2) 
    }
    return count
  }
  return arr.sort((a, b) => {
    const Anum = getNum(a),
          Bnum = getNum(b)
    if(Anum != Bnum) {
      return Anum - Bnum
    } else {
      return a - b
    }
  })
  
}

let arr1 = [1, 2, 55, 66]
console.log(sortByBits(arr1));

