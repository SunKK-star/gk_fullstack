Person.prototype.lastName = 'Liu'

function Person(name) {
  this.name = name
}

var person = new Person('zhipeng')

// console.log();
// Person.lastName = 'Wang' //  没有改动原型属性，只是在自己的对象中增加了一个属性

delete person.lastName
console.log(person.lastName); // 没有改删除原型属性

Car.prototype = {
  contructor: Bus
}
function Bus() {}
function Car() {

}

var car = new Car()
console.log(Car.prototype);
console.log(car.contructor);

// contructor 指向的是Car(),目的是让Car()构造出来的对象想要找到自己的来历时可以找到 