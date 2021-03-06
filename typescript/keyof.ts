function getVal<T extends Obj, U extends keyof T>(o: T, key: U): T[U] {
  return o[key]
}

type Obj = {
  name: string
  age: number
}

let obj1 = {
  name: 'gk',
  age: 18
}
console.log(getVal(obj1, 'age'));


type name = 'firstName' | 'lastName';
type TName = {
  [key in name]: string;
};

let obj2: TName = {
  firstName: 'fds',
  lastName:'fds'
}
interface TArea{
  (arg:string, dfs: number): string
}
type params = Parameters<TArea>
type returns = ReturnType<TArea>

type myReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer P ? P : any
type myParamsters<T extends (...arg: any) => any> = T extends (...arg: infer P) => any ? P : never

interface SA {
  age: number,
  id: string
}

interface SB {
  name: 'fsds',
  age: number,
  id: string,
  gender: string
}
type SCC = SA & SB;

