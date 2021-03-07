function getJson() {
  setTimeout(function () {
    console.log(111);
  }, 1000)
}
function aa() {
  return new Promise((resolve, reject) => {
    console.log('aa');
    reject('err')
  })
}

function bb() {
  return new Promise((resolve, reject) => {
    console.log('bb');
    resolve('ok')
  })
}
async function testAsync() {
  try {
    await getJson();
    console.log(222);
    await aa();
    await bb()
    console.log(111);
  } catch (error) {
    console.log(error);
  }
}

// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson()
//   }).then((res) => {
//     console.log(222);
//     return aa();
//   }).then(() => {
//     return bb()
//   }).then(() => {
//     console.log(111);
//   }).catch((err) => {
//     console.log(err);
//   })
// }

// // function testAsync() {
// //   return Promise.resolve().then(() => {
// //     return getJson()
// //   }).then((res) => {
// //     let data1 = res
// //     console.log(3);
// //     return aa()
// //   }).then((res) => {
// //     let data2 = res;
// //     console.log(data2);
// //     return bb()
// //   }).then((res) => {
// //     let data3 = res
// //   })
// // }

console.log(testAsync());
