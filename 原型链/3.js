var num = 123
// var num = new Number(123)
num.toString() // '123'

// Number.prototype.__proto__ = Object.prototype

var str = 'hello'
// var str = new String('hello')
console.log(str.length);  
// ??原始值类型不是不能有方法吗   上例中num与str既是原始值类型又是对象


// 方法重写
Object.prototype.toString = function() {
  return 'hehe'
}
function Person() {

}
var person = new Person()
console.log(person.toString());

