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

// 在谈闭包
  // 在编译的时候会扫描内部函数，判断是否引用该执行上下文中的数据即判断是否存在闭包，若有闭包则将闭包保存到堆内存中