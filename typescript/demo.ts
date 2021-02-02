// let isDone: boolean = false
// let decLiteral: number = 6

// function sum(a: number, b: string): string {
//   return a + b
// }

// console.log(sum(1,'2'));

let e: unknown;
e = 10
e = 'g'

let s: string

// 类型断言,用来告诉解析器变量的实际类型
// s = e as string
s = <string>e

// void 用来便是空，就表示没有返回值的函数

function fn(): void {

}
// nerver 表示永远没有返回值
function fn1(): never {
  throw new Error("报错了");
}

let sentence: string = `this is a new sentence ${e}
