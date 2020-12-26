function Archiever() {
  let value = null;
  let arr = []
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作');
      return value
    },
    set: function(newValue) {
      console.log('执行set操作');
      value = newValue
      arr.push({val: newValue})
    }
  })

  this.getArchieve = function () {
    return arr
  }
}


let arc = new Archiever()
arc.num = 22// get
arc.num = 11 // set
console.log(arc.getArchieve()); // [{val: 11}, {val: 22}]

