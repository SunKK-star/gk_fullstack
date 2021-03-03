# argument.callee
  - 这个属性保存的是当前执行的函数对象
    console.log(arguments.callee + "");
  - 当node在执行模块中的代码时，它会在代码的最顶部添加如下代码
    function (exports, require, module, __filename, __dirname) {}
  - 实际上模块中的代码都是包装在一个函数中,有node引擎调用执行的，同时传递进五个实参


# nodejs 默认会找node_modules对应模块中的index.js
  - 