function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('ok')
    }, 1000)
  })
}

function b() {
  setTimeout(() => {
    console.log('bbb');
  })
}

a().then(b)
