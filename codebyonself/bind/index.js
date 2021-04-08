Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("this must be a function");
  }
  var self = this;
  var fbound = function () {
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  }
  if (this.prototype) {
    fbound.prototype = Object.create(this.prototype)
  }
  return fbound;
}

function foo() {
  console.log(this.name);
}
let bb = new foo()
bb.name = 'ffdsfds'

const obj = {
  name: 18
}
let aa = foo.bind(obj)
aa()
