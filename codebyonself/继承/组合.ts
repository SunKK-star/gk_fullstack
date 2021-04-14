/*
 * @Author: your name
 * @Date: 2021-04-14 16:00:02
 * @LastEditTime: 2021-04-14 16:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \codebyonself\继承\组合.ts
 */

export function Parent () {
  this.name = "hh"
}
Parent.prototype.getName = function () {
  return this.name
}

export function Child() {
  this.age = 18;
  Parent.call(this)
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const c1 = new Child()
const c2 = new Child()

c1.name = "hl"
console.log(c1, c2);
