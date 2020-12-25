class EventEmitter {

  constructor () {
    // 存储事件
    this.events = this.events || new Map()
  }

  // 监听事件
  addListener (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }


  // 触发事件
  emit (type) {
    let handle = this.events.get(type)   // .get() 自动提取type值
    handle.apply(this, [...arguments].slice(1))
  }

}

let emitter = new EventEmitter()
emitter.addListener('age', age => {
  console.log(age);
})

emitter.emit('age', 18)