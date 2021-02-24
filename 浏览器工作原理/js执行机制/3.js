// var缺陷以及为什么要引入let和const

// 作用域
// 作用域就是变量和函数可访问范围

// 块级作用域

// function foo() {
//   for (var i = 0; i < 7; i++) {

//   }
//   console.log(i);
// }
// foo()

function foo() {
  var a = 1
  let b = 2
  // 函数作用域块
  {
    let b = 3
    var c = 4
    let d = 5
    console.log(a);
    console.log(b);
  }
  console.log(b);
  console.log(c);
  console.log(d);
}
