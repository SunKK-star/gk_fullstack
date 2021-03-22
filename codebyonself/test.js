let foo = function(name, age) {
  this.name = name;
  this.age = age
  return new Date()
}

let obj = new foo('gk', 18)
console.log(obj);
let big = null
console.log(Object.prototype.toString.call(big));