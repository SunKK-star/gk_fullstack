


  
  function a() {
  
  }
  
  
  let b = {
    name: 'ssxsx'
  }
  function a() {
    console.log(this.name);
  }

Function.prototype.mybind = function(thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const args = [...arguments].slice(1) // 不会影响原数组 [4,5]
  const self = this
  const nop = function() {}
  // 绑定函数
  const bound = function() {
    return self.apply(thisArg, args)
  }

  return bound
}

  
  a.mycall(b)