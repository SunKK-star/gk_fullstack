// function foo (b) {
//   var a = 5
//   return a * b +10
// }

// function bar(x) {
//   var y = 3
//   return foo(x * y)
// }

// bar(2)


// console.log(1);
// async function bar() {
//   await fn()  // 立即执行
//   console.log(6);  // 被await阻塞，放到微任务队列中
// }
// function fn() {
//   console.log(7);
// }
// function foo() {
//   return new Promise((resolve) => {
//     console.log(2);
//     resolve()
//   })
// }
// bar()
// console.log(3);

// foo().then(() => {
//   console.log(4); // 去到微任务队列
// })
// console.log(5);


async function async1() {
  console.log('async1 start');
  await async2();
 }
 async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
   resolve();
   console.log('async2 promise');
  })
 }
 console.log('script start');
 setTimeout(function() {
  console.log('setTimeout');
 }, 0);  
 async1();
 new Promise(function(resolve) {
  console.log('promise1');
  resolve();
 }).then(function() {
  console.log('promise2');
 }).then(function() {
  console.log('promise3');
 });
 console.log('script end');
 


