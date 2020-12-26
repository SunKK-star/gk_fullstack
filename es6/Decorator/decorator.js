var _class;

let Myclass = annotation(_class = class Myclass {}) || _class;

function annotation(target) {
  target.annotation = true;
}
