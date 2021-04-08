// function myNew () {
//   let bar = Array.prototype.shift.call(arguments)
//   let obj ={};
//   bar.call(obj, ...arguments);
//   return obj;
// }


// function foo(name, age) {
//   this.name = name;
//   this.age = age
// } 

// foo.prototype.gender = "male";
// let nn = myNew(foo, 'gk', 18);
// console.log(nn);

// console.log(a)  // undefined
// let a = 5
// function test() {
//   console.log(a)  // undefined
//   let a = 10
// }
// test()

// function test(arg){
//   console.log(arg);  // hi
//   var arg = 'hello'; 
 
//   console.log(arg); // hello 
// }
// test('hi');

let str = new String('fdsa')
str.toString()