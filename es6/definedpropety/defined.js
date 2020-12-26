let obj = {}
Object.defineProperty(obj, 'num', {
  // 数据描述符
  value: 1,
  writable: true,

  // 属性描述符
  enumerable: true,
  configurable: true,

  // 存取描述符
  // getter
  get: undefined,
  // setter
  set: function (val) {

  }
})

obj.num = 5

console.log(obj);