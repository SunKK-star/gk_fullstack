// function foo () {

//   console.log(this.a);
// }
// var bar = {
//   a: 2
// }
// foo.call(bar)


var a = {
  user: '蜗牛',
  fn: function(q , w) {
    console.log(this.user);
    console.log(q + w);
  }
}
var b = a.fn
b.call(a,2 ,3)

// var a = {
//     user: '蜗牛',
//     fn: function(q , w) {
//       console.log(this.user);
//       console.log(q + w);
//     }
//   }
// var b = a.fn
// b.apply(a, [12, 13])


// var a = {
//   user: '蜗牛',
//   fn: function(q , w) {
//     console.log(this.user);
//     console.log(q + w);
//   }
// }
// var b = a.fn
// // var c = b.bind(a,2,3)  两边都传参则以bind()里的实参为准
// // c()
// var c = b.bind()
// c(2,3)