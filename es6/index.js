

// let a = 'saxssx'
// let b = `this is ${a}`
// console.log(b);

// let foo = {
//   value: 1,
//   getValue: () => { // 箭头函数没有this
//     console.log(foo.value) 
//   }  // 没有加花括号等于在前面加上return 
// }

// foo.getValue()

// function Foo() {
//   this.value = 1

// }
// Foo.prototype.getValue = () => console.log(this.value);


// let obj = {
//   name: 'a',
//   age: 18,
//   gerder: 'boy'
// }

// for( i in obj) {
//   console.log(i);
// }

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
// ECMAScript 规范规定，数字属性应该按照索引值的大小升序排列，字符串按照创建的时间排序

let bar = new Foo()
console.log(bar);
for (let key in bar ) {
  console.log(`index:${key}` `value:${bar[key]}`);
}