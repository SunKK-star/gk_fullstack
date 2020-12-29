// let proxy = new Proxy({}, { // 传入一个空对象，交由proxy代理，返回proxy对象
//   get: function (obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function (obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })

// let handler = {
//   has (target, key) {
//     if (key[0] == '_'){
//       return false
//     }
//     return  key in target
//   }
// }

// let target = {_pro}

// proxy.time = 35

// let target = function() {return 'I am the target'}
// let handler = {
//   apply: function() {
//     return 'I am the Proxy'
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p());

let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

// target.prototype = {
//   a: 1,
//   b: 2
// }

let handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => {
      return key[0] !== '_'
    })
  }
}

let proxy = new Proxy(target, handler)

console.log(proxy);

for(let key of Object.keys(proxy)) {
  console.log(target[key]);
}
