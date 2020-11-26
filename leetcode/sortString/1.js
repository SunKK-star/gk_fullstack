/**
 * @param {string} s
 * @return {string}
 */
let sortString = function (s) {
  let hash = {}
  for (let v of s) {
    if (hash[v] === undefined) hash[v] = 0
    hash[v]++
  }
  let arr = [...new Set(s)].sort()
  let res = ''
  let len = arr.length
  let count = 0

  while (count < len) {

    for (let i of arr) {
      if (hash[i] > 0) {
        res += i
        hash[i]--
      } else count++
    }

    for (let j of arr.reverse()) {
      if (hash[j] > 0) {
        res += j
        hash[j]--
      }
    }
    arr.reverse()
    if (count < len) count = 0
  }

  return res
};