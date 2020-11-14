// function identify() {
//   return context.name.toUpperCase()
// }

// function speak() {
//   var greeting = "Hello,I am" + identify.call(this)
//   console.log(greeting);
// }

// var me = {
//   name: 'wn'
// }

// var you = {
//   name: 'yangbao'
// }
// speak.call(me)

// function foo() {
//   console.log(this.a);
// }

// var a = 2;

// (function() {
//   'use strict'
//   foo() // 严格模式下，foo调用与位置无关
// })()

// function foo() {
//   console.log(this.a);
// }
// var obj2 = {
//   a: 3,
//   foo: foo
// }
// var obj1 = {
//   a: 2,
//   obj2: obj2
// }

// obj1.obj2.foo()



// 

function foo(num) {
  console.log('foo:' + num);
  
  this.count++
}
foo.count = 0
var i;
for (i = 0; i < 10; i++) {
  foo.call(foo, i)
}

console.log(foo.count);