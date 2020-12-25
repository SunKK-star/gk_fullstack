const PENDING = 'peding'
const RESOLVED = 'resolved'
const REJECTED = 'rejected '

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []


  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  function reject() {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }


  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
  
}



MyPromise.prototype.then = function (onFulfilled, onReejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onReejected = typeof onReejected === 'function' ? onReejected : r => { throw r }

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
  }

  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onReejected(that.value)
  }
}


function a() {
  return new MyPromise((resolve, reject) => {
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
