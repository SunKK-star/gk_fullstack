// 能独立监听某个数据的变化
// 提供可执行函数的场所

class Watcher {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for (let key in opts.data) {
      this.setData(key)
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target).slice(8, -1) // [object object]
    return typeStr
  }
  setData (_key) {
    // this.$data
    Object.defineProperty(this, _key, {  // Object.defineProperty(this) 把上下文指向当前对象
      get () {
        return this.$data[_key]
      },
      set: function(newVal) {  // newVal是原生参数，必须要的
        const oldVal = this.$data[_key]
        if (newVal === oldVal) return 
        this.$data[_key] = newVal

        // 调用opts里面的watch里面的函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, newVal, oldVal)
        )
      }
    })
  }
}

let vm = new Watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a: function (newVal, oldVal) { // 与键值对相同
    
        console.log(newVal, oldVal);
      
    }
  }
})

setTimeout(() => {
  vm.a = 1
}, 1000)