/*
 * @Author: your name
 * @Date: 2021-04-14 15:59:37
 * @LastEditTime: 2021-04-14 16:06:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \codebyonself\继承\原型链.ts
 */
function Parent () {
  this.name = "hh"
}
Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  this.age = 18
}

Child.prototype = new Parent()
const child = new Child()
console.log(child.name);
