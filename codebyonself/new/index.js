// function newOperator(ctor, ...args) {
//   if(typeof ctor !== 'function'){
//     throw 'newOperator function the first param must be a function';
//   }
//   let obj = Object.create(ctor.prototype);
//   let res = ctor.apply(obj, args);
  
//   let isObject = typeof res === 'object' && res !== null;
//   let isFunction = typeof res === 'function';
//   return isObject || isFunction ? res : obj;
// };


// let foo = () => {
//   let obj = {name: 'gk'}
// }



const myNew = function () {
  const Constrcutor = Array.prototype.shift.call(arguments);
  let obj = Object.create(Constrcutor.prototype);
  let res = Constrcutor.apply(obj,arguments);
  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function'
  return isFunction || isObject ? res : obj
}

let Foo = function (name, age) {
  this.name = name;
  this.age = age;
  return null
}
let obj = myNew(Foo, 'gk', 18)
console.log(obj);

