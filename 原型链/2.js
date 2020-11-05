var obj = {}

// var obj1 = new Object()
obj1.__proto__ = Object.prototype

Object.create(obj)
var obj = {
  name: 'wn',
  age: 18
}

var obj1 = Object.create(obj)  // 将obj1的原型指向obj

// 网易面试题
// 所有对象最终都会继承自Object.prototype 
// 不是的，特例：
// var obj = Object.create(null)
