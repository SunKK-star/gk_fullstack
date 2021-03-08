function newOperator(ctor, ...args) {
  if(typeof ctor !== 'function'){
    throw 'newOperator function the first param must be a function';
  }
  let obj = Object.create(ctor.prototype);
  let res = ctor.apply(obj, args);
  
  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
};


let foo = () => {
  let obj = {name: 'gk'}
}


let p = newOperator(foo)
console.log(p);