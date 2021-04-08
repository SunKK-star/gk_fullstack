let myinstanceof = (left, right) => {
  if(typeof left !== 'function' && typeof left !== 'object' || typeof left === null) return false;
  let proto = Object.getPrototypeOf(left);
  if(right.prototype === proto) return true;
  else myinstanceof(proto, right)
}

function foo() {

}

let o = new foo()
// console.log(myinstanceof(o,foo));

console.log(myinstanceof(o, foo));
console.log(Object.getPrototypeOf(foo) == foo.__proto__);