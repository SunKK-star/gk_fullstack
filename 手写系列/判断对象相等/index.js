
// let a = [1]
// let b = [1]
// console.log(eq(a, b)); // true

// +0 === -0
// (+0).toString() // '0'
// (-0).toString() // '0'

function eq (a, b) {
  if (a===b) return a !== 0 || 1 / a === 1 / b // +0 -0
  if (a !== b) return a !== b // NaN
  if (a == null || b == null) return false

  let type = typeof(a)
  if (type !== 'function' && type !== 'object' && typeof(b) !== 'object') return false
  // 更复杂的对象
  return deepEq(a, b)
}
// Object.prototype.toString()
console.log(eq(1,2));

