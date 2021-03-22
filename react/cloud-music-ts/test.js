class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  speak() {
    console.log(`${this.name}在haha`);
  }
}

let obj = new Person('gk', 23)
let ss = obj.speak
ss()