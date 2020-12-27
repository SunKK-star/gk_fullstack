let obj = {}
obj.num = 56
Object.defineProperty(obj, 'num', {
  // 数据描述符
  // value: 1,
  // writable: false,

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

obj.num = 6

console.log(obj.num);