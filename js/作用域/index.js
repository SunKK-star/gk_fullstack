// function doSoming(a) {
//   b = a + doSoming(a*2)
// }

// function doSomingElse() {
//   return c - 1
// }

// var b;

// 块级作用域
for (let i = 0; i < 10; i++) {
  console.log(i);

}
console.log(i);

// var a = 1
// var a;  变量声明，声明提升
// var a = 1

// var a = 1
// console.log(a);  声明提升，导致不能读到a的值


var foo = true 
if (foo) {
  var a = 2
}

console.log(a);


