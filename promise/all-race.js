function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      resolve('ok')
    }, 1500)
  })
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ccc');
      // resolve('ok')
      reject('test')
    }, 500)
  })
}

function d() {
  console.log('ddd');
}

// Promise.all([a(), b(), c()]).then(d)

// Promise.race([a(), b(), c()]).then(d)


a().then(b).then(c).finally(d)