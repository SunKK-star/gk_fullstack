// 在定义函数和类时遇到类型不明确时可以使用泛型
function fn<T>(a: T): T{
  return a
} 

console.log(fn<string>('dfd'));

interface myinter1 {
  length: number
}
function fn1<T extends myinter1, K>(a: T, b: K): T {
  return a
}

console.log(fn1('dsads', 15)); // 字符串中有length属性，所以可以传，并不一定需要对象
