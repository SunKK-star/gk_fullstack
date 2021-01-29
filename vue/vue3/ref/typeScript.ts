// 泛型
// type Value<T> = T

// type NumberValue = Value<Number>
// 类型变量就是泛型
// function returnItem<T>(params: T): T {
//   return params
// }

// returnItem('hello')

// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// swap(['tom', 18])

// function getArrayLength<T>(arg: Array<T>) {
//   console.log(arg.length);
//   return arg
// }

// 泛型推导

function create<T>(val: T): T {
  return val
}

let num: number
const c = create(num)

// 索引签名
type Test = {
  foo: number;
  bar: string
}

type N = Test['foo']

// 条件类型
type IsNumber<T> = T extends number ? 'yes' : 'no'

type A = IsNumber<2>
type B = IsNumber<'3'>

type TypeNumber<T> = T extends string ? 'string' : T extends boolean ? 'boolean' : 'object'
type T1 = TypeNumber<true>

// keyof
// 是ts中用来获取对象的key值集合的

type Obj = {
  foo: number;
  bar: string
}

type Keys = keyof Obj

type Copy = {
  [K in keyof Obj]:Obj[K]
}

// 条件类型中的类型推断
// 对extends未知类型进行占位
type Get<T> = T extends infer R ? R : never 
type UnPack<T> = T extends Array<infer R> ? R : T
type T = Get<number>