// let arr = [1,2,3,5,1]

// let a = [...new Set(arr)]
// console.log(a);

// function test(color) {
//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry']
//     case 'yellow':
//       return ['banana', 'pear']
//     case 'green':
//       return ['watermelon']
//     default: 
//       return
//   }
// }

// console.log(test('red'));

// const fruitColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pear'],
//   green: ['watermelon']
// }

// 传统的对象中属性只能是字符串  Map对象的key可以取任意值
// 
// let obj = new Map()
// let a = 1
// obj.set(a, 123)
// console.log(obj);
const fruitColor = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pear'])
  .set('green', ['watermelon'])
function test(color) {
  return fruitColor.get(color)
}
console.log(fruitColor);
// console.log(test('red'));