//让instanceof也能判断原始类型

class PrimitiveString {
  // static当前类中才能被调用
  // 静态方法
  static [Symbol.hasInstance] (x) { // Symbol.hasInstance让我们定义instanceof的行为
    return typeof x === 'string'
  }
}
console.log('hello' instanceof PrimitiveString);


function test(person) {
  person.age = 26
  person = { // #002
    name = 'yyy',
    age: 30
  }
  return person
}

const p1 = { // #001
  name: 'xxx',
  age: 25
}
const p2 = test(p1)
consle.log(p1)
consle.log(p2)
