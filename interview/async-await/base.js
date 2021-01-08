// function getContent() {
//   return 1;
// }
// async function getAsyncContent() {
//   return 1;
// }
// async function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   })
// }

// async function test() {
//   let a = 2
//   let c = 1
//   await getPromise()
//   let d = 3
//   await getAsyncContent()
//   let e = 4
//   await getContent()
//   console.log(111);
//   return 2
// }

// console.log(test());

async function a() {
  return new Promise((resolve, reject) => {
    resolve('ok')
    console.log(111);
    
  })
}
console.log(a());