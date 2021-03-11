let obj = {
  name: 'gk'
}

function foo() {
  console.log(this.name);
}

[1,2,3].forEach(foo, obj)