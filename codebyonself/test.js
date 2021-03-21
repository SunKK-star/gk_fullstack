let obj = {
  name: 'fdsfs'
}
obj.ffff = function() {
  this.name = 'kgdfgd'
  console.log(1235);
}

function ooo () {

  console.log(1);
}

let a = new obj.ffff()

console.log(a);