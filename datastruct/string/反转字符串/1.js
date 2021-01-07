let isPalindrome = (str) => {
  let halfLen = Math.floor(str.length / 2)
  let m = 0, n = str.length - 1;
  for (let i = 0; i < halfLen; i++) {
    if (str[m] !== str[n]) return false
    m++;
    n--;
  }
  return true
}

// let aaa = (str) => {
//   if (isPalindrome(str)) {
//     return true
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       let old = str
//       let arr = str.split('')
//       arr.splice(i, 1)
//       let newstr = arr.join('')
//       if (isPalindrome(newstr)) {
//         return true
//       } else {
//         str = old
//       }
//     }
//     return false
//   }
// }

// let str = 'abcdiudcba'
// console.log(aaa(str));


let validPalindrome = (str) => {
  while (condition) {
    
  }
}
