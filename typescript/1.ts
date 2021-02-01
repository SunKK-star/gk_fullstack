let b: { name: string, age?: number };
b = { name: 'gk' }

let c: { name: string, [propName: string]: unknown }

c = { name: 'bob', age: 18 }

let d: (a: number, b: string, ) => string;
d = function (a: number, b: string) {
  return a + b
}

let f: string[]
let g: Array<string>

// 元组 玉足就是固定长度的数组固定长度的数组

let h: [string, number]
h = ['ss', 56]

// 枚举
enum Gender{
  Male = 1,
  Female = 0
}
let i: { name: string, gender: Gender }
i = {
  name: "孙悟空",
  gender: Gender.Male
}
console.log(i.gender);

let j: { name: string } & { age: number }
j = {
  name: '猪八戒',
  age: 151815
}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let m: myType
m = 5