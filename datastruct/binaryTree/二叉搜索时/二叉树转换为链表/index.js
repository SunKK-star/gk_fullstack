let test = {
  age: undefined,
  sex: Symbol('man'),
  job: 'coder',
  run: function() {},
  name: 'wn'
}

// let test1 = JSON.parse(JSON.stringify(test))
let test1 = Object.assign({},test);
test.name = 'gk';
console.log(test1);