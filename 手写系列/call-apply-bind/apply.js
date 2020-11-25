let b = {
  name: '宜豪',
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.myapply = function(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const args = arguments[1]
  console.log(args);

  const fn = Symbol('fn')
  thisArg[fn] = this
  const res = thisArg[fn](...args)
  delete thisArg[fn]
  return res
}



a.myapply(b, [3, 2])


