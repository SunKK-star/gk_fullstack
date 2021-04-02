
let a = 'fds'

Object.defineProperty(a, a, {
  set() {
    console.log(123);
  },
  get() {
    console.log(156);
  }
})

console.log(a);