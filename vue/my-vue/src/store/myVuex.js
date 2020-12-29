let Vue

class Store {
  constructor(options) {
    // this.state = options.state || {},
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })

    let getters = options.getters || {}
    this.getters = {}
    // 拿到options.getters里面所有的key
    // 把所有的函数都添加到this.getters
    // 当取用某个函数的时候可以直接拿函数名出来用，不用打(),
    Object.keys(getters).forEach(gettername => {
      // this.getters[gettername] = getters[gettername]
      Object.defineProperty(this.getters, gettername, {
        get: () => {
          return getters[gettername](this.state)
        }
      })
    })
    // let keys = Object.keys(getters)
    // let handler = {
    //   enumerable: false,
    //   configurable: false,
    //   get() {

    //   }
    // }
    // for(let key of keys) {
    //   Object.defineProperty(getters,key, handler)
    // }





    let muntations = options.muntations || {}
    this.muntations = {}
    Object.keys(muntations).forEach(muntationskey => {
      this.muntations[muntationskey] = (arg) => {
        muntations[muntationskey](this.state, arg)
      }
    })

    this.actions = options.actions,
      this.modules = options.modules
  }
  get state() {
    return this.vm.state
  }
  commit(method, arg) {
    this.muntations[method](arg)
  }
}

let install = function (vue) {
  Vue = vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}
let Vuex = {
  Store,
  install
}

export default Vuex;