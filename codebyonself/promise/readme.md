定义一个函数的三部曲：
1. 入参
2. 执行逻辑
3. 返回值



1. const promise = new Promise()
2. 定义三种状态
3. 初始化状态
4. resolve 和 rejected 方法
  4.1 这两个方法要更改status，从pending变成fulfilled / rejected;
  4.2 入参 分别value / reason，
5. 对于实例化promise时的入参处理
  5.1 入参是函数，该函数接收resolve、rejected两个参数
  5.2 初始化promise的时候，就要同步执行这个函数，并且任何的报错都要通过rejected抛出去
6. then 方法
  6.1 then接收两个参数 onFulfilled onRejected
  6.2 检查并处理参数，如果不是函数，则忽略
  6.3 根据当前promise的状态，调用不同的函数
  6.4 首先我们要拿到所有的回调，新建两个数组，分别存储成功和失败的回调
  6.5 在status发生变化的时候，执行回调
7. then的返回值
  7.1 如果 onFulfilled 或者 onRejected 抛出一个异常，那么新的promise必须reject
  7.2 返回值是一个promise
  7.3 如果 onFilfilled不是函数，且promise1成功返回，promise2必须返回同样的状态和value。
  7.4 如果onRejected 不是函数， 且promise拒绝执行，promise2必须返回同样的状态和reason。
  7.5 如果onFulfilled 或者 onRejected 返回一个值 x， 运行resolvePromise方法。