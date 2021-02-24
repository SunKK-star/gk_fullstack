// 作用域链

// function bar() {
//   console.log(myName);
// }
// function foo() {
//   var myName = '蜗牛'
//   bar()
// }
// var myName = '周老板'
// foo()

// 词法作用域 =》 由代码的位置决定，不是看函数怎么调用的
// 作用域链是由词法作用域决定的

// 要看结果是多少，就要看作用域链是怎么走，要知道作用域链怎么走，就看词法作用域怎么嵌套

// 块级作用域中变量的查找

// function bar() {
//   var myName = '聪哥'
//   let test = 100
//   if(1) {
//     let myName = '陶班长'
//     console.log(test);
//   }
// }

// function foo() {
//   var myName = '酒神'
//   let test = 2
//   {
//     let test = 3
//     bar()
//   }
// }

// var myName = '胡毅'
// let nyAge = 20;
// let test = 1
// foo()


// 闭包
function foo() {
  var myName = '甘总'
  let test1 = 1
  const test2 = 2
  var innerbar = {
    getName: function() {
      console.log(test1);
      return myName
    },
    setName: function(newName) {
      myName = newName
    }
  } 
  return innerbar
}
var bar = foo()
bar.setName('杨宝')
bar.getName()
console.log(bar.getName());

// 

