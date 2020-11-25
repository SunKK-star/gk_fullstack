// function foo() {
//   console.log(this.a);
// }

// var obj = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//   a: 1
// }

// // var bar = function() {
// //   foo.call(obj)
// // }
// // bar()



// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }
// var obj = {
//   a: 2
// }
// var bar = function() {
//   return foo.apply(obj, arguments)  // 此时return 的原因，foo函数执行之后返回的是一个数，你需要再把这个数return出去
// }
// var b = bar (3)
// console.log(b);
// let a= foo.call(obj, 3)
// console.log(a);

// function foo(a) {
//   this.a = a
// }
// obj1 = {
//   a: 6,
//   foo: foo
// }

    obj1.foo(5)
    console.log(obj1.a);
    obj1 = {
      a: 6,
      fo: function foo(a) {
        this.a = a
      }
    }
    obj1.fo(3)
    console.log(obj1.a);

function foo(p1,p2) {
  this.val = p1+p2
}
var bar = foo.bind(null, 'p1')
var baz = new bar('p2')
console.log(baz.val);