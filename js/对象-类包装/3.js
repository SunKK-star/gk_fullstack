// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的
var num = 123
num.abc = 'aaa'
console.log(num);

var str = 'abcd'


var arr = [1,2,3,4]
arr.length = 2
console.log(arr); // [1,2]

var str = 'abcd'
str.length = 2
// new String('abcd').length = 2   delete str.length

console.log(str); // abcd


// 面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof(str) // string
if (test.length == 6) {
  test.sign = 'typeofd的返回结果可能是String'
}
console.log(test.sign);