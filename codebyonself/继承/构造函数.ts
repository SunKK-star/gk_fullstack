/*
 * @Author: your name
 * @Date: 2021-04-14 15:59:52
 * @LastEditTime: 2021-04-14 16:08:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \codebyonself\继承\构造函数.ts
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

const c = new Child()
console.log(c);