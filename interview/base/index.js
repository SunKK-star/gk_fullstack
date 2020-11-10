// let key1 = Symbol(1)
// let key2 = Symbol(1)

// console.log(key1 == key2);

// console.log(typeof(null));



// const a = []
// const b = a
// b.push()


// function test(person) {
//   person.age = 26
//   person = { // #002
//     name = 'yy',
//     age: 30
//   }
//   return person
// }

// const p1 = { // #001
//   name: 'xxx',
//   age: 25
// }
// const p2 = test(p1)
// consle.log(p1)
// consle.log(p2)

console.log(type(1));
console.log(type([]));

//让instanceof也能判断原始类型

class PrimitiveString {
  // static当前类中才能被调用
  // 静态方法
  static [Symbol.hasInstance] (x) { // Symbol.hasInstance让我们定义instanceof的行为
    return typeof x === 'string'
  }
}
console.log('hello' instanceof PrimitiveString);