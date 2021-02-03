// 抽象类专门用来给其他类继承的，它不能被实例
// 抽象类中可以添加抽象方法
abstract class Person {
  name: string;
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  abstract sayhelly(): void 
}

class Student extends Person {
  id: number
  constructor(name: string, age: number, id: number) {
    super(name, age);
    this.id = id
  }
  // super 表示当前类的父类
  sayhelly() {
    console.log('student');
    
  }
}

const studet = new Student('ss', 56, 1)
studet.sayhelly()
console.log(studet);

