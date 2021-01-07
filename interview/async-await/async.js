function getJson() { // 异步
  return 'JSON'
}

function testAsync() {
  try {
    await getJson()
  } catch (error) {
    console.log(error);
  }
  // .....
}

// 1. ayync函数在声明形式上跟普通的函数没有区别，函数声明，
// 函数表达式，对象方法，class方法，箭头函数都可以声明async函数
// 2. 任何一个await语句后面的Promise对象变成reject状态，
// 那么整个async函数都会中断
// 3. async函数返回promise对象，必须等到内部所有的await命令
// 后面的promise对象执行完才会发生状态改变，除非遇到return语句或者抛出错误