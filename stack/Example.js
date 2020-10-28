"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack"); // es6 模块化引入
var StackObj_1 = require("./lib/StackObj");
var stack = new Stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"](); // 入栈每一个位
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObject = function (decNumber) {
    var stack = new StackObj_1["default"]();
    var number = decNumber;
    var rem;
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber = 99998999323228732287;
console.time("数据栈"); // 性能调试
console.log(decimalToBinary(testNumber));
console.timeEnd("数据栈");
console.time("对象栈"); // 性能调试
var testObjNumber = 99998999323228732287;
console.log(decimalToBinaryObject(testObjNumber));
console.timeEnd("对象栈");
