// 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝？

// let a = {
//   age: 18,
//   info: {
//     name: 'wn'
//   }
// }

// let b = a

// 实现深拷贝
//   let b =  

// let b = Object.assign({}, a)

// 解构也称为浅拷贝的方法，虽然它可以实现深拷贝
let c = {
  age: 1, 
  jobs: {
    first: 'coding'
  }
}
let d = {...c}
c.age = 2  // 深拷贝
c.jobs.first = 'waiter' // 浅拷贝
console.log(d.age);



// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3
//   }
// }

// obj.c = obj.b
// obj.e = obj.a





let test = {
  age: undefined,
  sex: Symbol('man'),
  job: function() {},
  name: 'wn'
}
let b = JSON.parse(JSON.stringify(test))
console.log(b);
