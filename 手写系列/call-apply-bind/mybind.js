Function.prototype.mybind = function(thisArg) {
  if(typeof this !== 'function') {
    return 'Type error'
  }
  thisArg = thisArg || window
  let args = [...arguments].splice(1)
  let fn = Symbol('fn')
  thisArg.fn = this
  let result = function() {
    thisArg.fn(...args)
  }
  delete thisArg.fn


  return result
}


function a(aa,bb,cc) {
  console.log(this.name,aa+bb+cc);
}
let b = {
  name: 'sadasd'
}

let c = a.mybind(b,'as','dsa','dsad')
c()


