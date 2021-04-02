interface foo {
  name: string,
  age: 18
}

type b = keyof foo


let c: b = "name"