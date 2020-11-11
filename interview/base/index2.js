//    1 == '1' 
// 1. 最开始判断两者类型是否相同，相同的话就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 会先判断是否在对比null和undefined，是的话就会返回true
// 4. 判断两者是否是string和number，是的话就将string转为number
// 5. 判断其中一方是否为boolean,是的话就将boolean转为number
// 6. 判断其中一方是否为object，且另一方为string，number，Symbol，是的话就把object转为原始值类型进行比较


// [] == [] // false   引用类型是判断指针是否相同
// '' == '' // true
// [] == ![] // true

// [] == !true  // 任何类型在前面加！则需要转换成boolean
// [] == false  //  boolean转为number
// [] == 0      //  遇到object，js引擎调用[[toPrimitive]],调用valueOf()，若不能转换则调用toString()
// '' == 0      //  string转为number
// 0 == 0




  // // 闭包
  // function A() {  // 函数声明
  //   let a = 1
  //   window.B = function() { // 函数表达式
  //     console.log(a);
  //   }
  // }
  // A()
  // B() // 形成了闭包 所以闭包的形成并不一定需要return

  // 函数B在window全局上
  

  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000)
  }

  // 方法1：自执行函数
  for (var i = 1; i <= 5; i++) {
    (function(j){
      setTimeout(function() {
        console.log(j);
    }, j*1000)
    })(i)     // 当自执行函数执行完了之后，js垃圾回收机制找到自执行函数
              // 后要销毁它，但自执行函数里面的异步函数没有执行，不能被销毁，所以就形成了闭包
  }
 
  // 根据setTimeout函数的特性，可以传第三个参数，这个参数是实参
  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000,i)  // 此事实参i与setTimeout这个异步函数一起关进了小黑屋
  }



  // function A() {  // 函数声明
  //   let a = 1
  //   window.B = function() { // 函数表达式
  //     console.log(a);
  //   }
  // }
  // A()
  // B() // 形成了闭包 所以闭包的形成并不一定需要return







