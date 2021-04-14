/*
 * @Author: gk
 * @Date: 2021-04-14 16:27:24
 * @LastEditTime: 2021-04-14 16:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \codebyonself\继承\原型式.ts
 */

let parent4 = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function() {
    return this.name;
  }
};

let person4 = Object.create(parent4);
person4.name = "tom";
person4.friends = [];

let person5 = Object.create(parent4);
person5.friends.push("lucy");

console.log(person4.name);
console.log(person4.name === person4.getName());
console.log(person5.name);
console.log(person4.friends);
console.log(person5.friends);