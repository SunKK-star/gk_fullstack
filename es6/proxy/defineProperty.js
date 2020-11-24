function baz() {
  console.log(baz);
  bar()
}

function bar() {
  let a =1
  console.log(bar);
  foo()
}

function foo() {
  console.log(foo);
}

baz()