function foo(name) {
  this.name = name
}

let fo = new foo('fds')

foo.prototype.str = 'fdsa'

function Bar() {

}
Bar.prototype = Object.create(foo.prototype)

let bar = new Bar()
console.log(bar.str);
Bar.prototype.str = 'gfdgdgfdgdgdfg'
console.log(foo.prototype.str);
console.log(fo.str);


