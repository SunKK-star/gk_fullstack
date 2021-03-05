export type User = {
  type: 'admin'
  name: string
  age: number
  gender: string
}

export interface Student {
  type: 'stu'
  name: string
  age: number
  id: number
}

export type Person = User | Student

export const users: Person[] = [
  {
    type: 'admin',
    name: 'tom',
    age: 18,
    gender: 'man'
  },
  {
    type: 'stu',
    name: 'mary',
    age: 19,
    id: 18
  }
]
let userf: Partial<User> = {
  name: '256',
  age: 18,
}
let a: keyof User = 'age'
let b: keyof User = 'gender'
let c: keyof User = 'name'
console.log();


export function logPerson(user: Person): void {
  if ('gender' in user) { // 类型断言 // 类型收缩
    console.log(user.gender);
    
  } else {
    console.log(user.id);
    
  }
  console.log(`-${user.name},${user.age}`);
}

console.log("Users:");
users.forEach(logPerson)
