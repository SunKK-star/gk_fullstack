/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(str1, str2) {
  let arr1 = str1.split('.')
    let arr2 = str2.split('.')
    let len = Math.max(arr1.length, arr2.length)
    for(let i = 0; i < len; i++) {
      let a = arr1[i] ? arr1[i] : 0
      let b = arr2[i] ? arr2[i] : 0
      a = Number(a)
      b = Number(b)
      if(a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
    }
    return 0
};