function foo() {
  let a= 2
  return function bar() {
    console.log(3);
  }
} 

foo()()