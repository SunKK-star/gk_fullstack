// Person.prototype   --原型
// console.log(Person.prototype); // 函数被定义出来的那一刻就具备prototype这一属性

Person.prototype.name = '蜗牛'
Person.prototype.say = function() {
  console.log('sxxscccx');
} 


function Person(name) {
  this.name = name
}
var person = new Person('蜗牛')
console.log(person);  // 可以隐式的继承原型上的属性

// 它定义了构造函数制造出来的对象的公共祖先
var person1 = new Person()
console.log();