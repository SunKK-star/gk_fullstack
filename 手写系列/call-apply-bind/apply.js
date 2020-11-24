

Function.prototype.myapply = function(thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 让this代表的这个函数去到 thisArg里面生效
  const fn = Symbol('fn') // 防止fn这个单词被占用
  // 把this 代表的这个函数所拥有的参数先取到
  const args = [...arguments].slice(1)   // splice slice
  thisArg = thisArg || window
  
  // 将调用call函数的方法添加到thisArg的属性中
  thisArg.fn = this
  const result = thisArg.fn(args)
  delete thisArg.fn
  
  return result
  }
  
  function a() {
  
  }
  
  
  let b = {
    name: 'ssxsx'
  }
  function a(a, b) {
    console.log(a + b);
    console.log(this.name);
  }
  
  a.myapply(b,[1,2])


Function.prototype.myapply = function(obj, arg) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // const args = arguments[1]
  const fn = Symbol('fn')
  obj.fn = this
  const res = obj.fn(...arg)
  delete obj.fn
  return res
}