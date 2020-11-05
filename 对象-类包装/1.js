var person = {
  name: 'jiushen',
  age: '20',
  sex: 'boy',
  drink: function() {
    console.log('I am drinking');
    this.health++
  },
  smoke: function() {
    console.log('I am smoking! huazi');
    this.health--
  },
  health: 100
}
// person.health++ 
// console.log(person.health);

// person.smoke()
// person.drink()
// person.drink()
// console.log(person.health);

// 增
person.boyfriend = 'mszhou'

// 查
console.log(person.sex);  // 访问对象中没有的属性值为undefined

// 改
person.sex = 'girl'
console.log(person.sex);

// 删
delete person.name
console.log(person);


console.log(cat);

// 对象的创建
// 1. var obj = {} // 对象字面量
// 2. 构造函数
//    1）系统自带的构造函数 Object()
//    2) 自定义  

function Car() {
  this.name = 'BMW'
  this.height = '1400'
  this.lang = '4900'
  this.weight = 100
  this.health = 100
  this.run = function() {
    this.height--
  }
  this.color = color
}

var car = new Car('black')
var car1 = new Car('white')