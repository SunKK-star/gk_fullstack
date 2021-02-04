type myType = {
  name: string,
  age: number,
  [propName: string]: any
}



// 接口用来定义一个类的结构, 用来定义一个类中应该包含那些属性和方法,同时接口也可被当做类型声明去使用,同时可以定义两个接口
// 接口中的所有属性都不能有实际的值
interface myInterface {
  name: string,
  age: number,
  [pro: string]: any
}
interface myInterface {
  gender: string
}
const obj: myInterface = {
  name: 'gk',
  age: 23,
  gender: 'nan',
  das: 'fdf'
}

interface myinter{
  dayhello(): void
}

class Studen implements myinter{
  private _name: string
  private age: number
  constructor(name: string,public gender: string, age: number) {
    this._name = name
    this.age = age
  }
  dayhello(): void {
    console.log(132);
  }
  // setGender(gender: string): void {
  //   this._gender = gender
  // }
  // getGender(): string {
  //   return this._gender
  // }

  // ts中设置getter方法
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
  get _age() {
    return this.age
  }
  set _age(value) {
    if (value >= 0) {
      this.age = value
    }
  }
}

const s = new Studen('sd', 'm', 18)
s.name = '孙悟空'
s._age = -1
console.log(s);


