console.log(1);  // 1
async function bar() {
  await fn()  // 立即执行
  console.log(6);  // 被await阻塞，放到微任务队列中
}
function fn() {
  console.log(7);
}
function foo() {
  return new Promise((resolve) => {
    console.log(2);
    resolve()
  })
}
bar()
console.log(3);

foo().then(() => {
  console.log(4); // 去到微任务队列
})
console.log(5);