function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(2)
    }, 2000)
  })
}
async function testAsync() {
  let data = await getJson()
  await aa()
  console.log(3);
  console.log(data);
}

// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson()
//   }).then((res) => {
//     let data = res
//     console.log(3);
//     console.log(data);
//   })
// }

testAsync()