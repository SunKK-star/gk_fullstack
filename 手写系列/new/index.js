Person.prototype.say = function() {
  console.log('hahaha');
}

function Person(name, age) {
  this.name = name 
  this.age = age
  // return            // 在构造函数内部return 原始值类型不影响，return 对象会受影响
}
// console.log(person);

// let person = new Person('小敏', 18)
// console.log(person);

function myNew() {
  arguments  // 类数组，相当于对象
  let obj = {}
  // 取到外部传入的构造器
  let Construction = Array.prototype.shift.call(arguments)
  obj.__proto__ = Construction.prototype

  let resule = Construction.apply(obj, arguments)

  return typeof resule === 'object'?resule:obj
}

let person = myNew(Person, '小敏', 18)
console.log(person);