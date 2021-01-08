function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve('sadsd')
    }, 1000)
  })
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
  let data1 = await getJson();
  console.log(data1);
  console.log(222);
  let data2 = await aa();
  let data3 = await bb()
  console.log(data1, data2, data3);
  console.log(111);
}

// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson()
//   }).then((res) => {
//     let data1 = res
//     console.log(3);
//     return aa()
//   }).then((res) => {
//     let data2 = res;
//     console.log(data2);
//     return bb()
//   }).then((res) => {
//     let data3 = res
//   })
// }

testAsync()