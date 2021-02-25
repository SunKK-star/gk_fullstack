function foo() {
  var a = 1;
  var b = a;
  a = 2;
  console.log(a);
  console.log(b);
}
foo()


function foo2() {
  var a = {name: '杨宝'};
  var b = a;
  a.name = 'sdf'
  console.log(a);
  console.log(b);
}
foo2()