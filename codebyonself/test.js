function foo() {
  console.log("name: " + this.name);
}



let obj = {name: "obj"}, 
    obj2 = {name: "obj1"},
    obj3 = {name: "obj3"}

let fooOBJ = foo.bind(obj);
fooOBJ.call(obj2)