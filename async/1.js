// let promise = new Promise((resolve, reject) => {
//   console.log('promise执行');
//   setTimeout(() => {
//     reject('123')
//   }, 2000)
// }).then(
//   (a) => {
//     console.log(a);
//   },
//   (b) =>{
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(b);
//         resolve('第二层promise')
//       },1500)
//     })
//   }
// ).then((a) => {
//   setTimeout(() => {
//     console.log(a);
//     return new Promise((resolve, reject) => {
//       resolve('第三层promise')
//     })
//   },2000)
// },
// () => {

// }).then((a) => {
//   console.log(a, 'fds');
// },
// (a) => {
//   console.log(a);
// }).then((a) => {
//   console.log(a, 'en');
// })


// let promise = new Promise((resolve, reject) => {
//   resolve('第一层promise')
// }).then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       console.log(123);
//       reject(data)
//     },1000)
//   }) 
// }).then(
//   (a) => {},
//   (b) => {
//     setTimeout(() => {console.log(13219515);}, 3000)
//     return new Promise((resolve, reject) => {
//     console.log(resolve);
//     setTimeout(() => {
//       console.log(b, 'reject');
//       reject("reject回调里的resolve值");
//     },1500)
//   })}
//   )
//   .then(
//     () => {console.log(123);},
//     (a) => {setTimeout(() =>{console.log(a);}, 1000)},
//   ).then(() => {console.log(121);})
//   .then(() => {console.log(122);})
//   .catch((err) => {
//   console.log(err,'catch');
// })

// let p1 = new Promise((rv,rj) => {
//   // rv('haa')
// })

// let p2 = new Promise((v, j) => {
//   v(p1)
// }).then((a) => {console.log(a);})


function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1000);
      reject(123)
    }, 2000)
  })
}

function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1200);
      resolve(121)
    }, 1000)
  })
}

let a = async function bb() {
  try {
    console.log(123);
    let data = await foo();
    console.log(data);
    console.log(16156);
    let data1 = await bar();
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
}

console.log(a());
