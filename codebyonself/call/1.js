Function.prototype.myCall = function (context, ...arg) {
  const ctx = context || window;
  ctx.fn = this;
  let res = eval('ctx.fn(...arg)')
  delete ctx.fn;
  return res
}

let obj = {
  name: 18
}

function foo (a) {
  console.log(this.name, a);
}
foo.myCall(obj,1)