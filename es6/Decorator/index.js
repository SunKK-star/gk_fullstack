@annotation
class Myclass {
  @readonly
  @unenumerable
  
}

function annotation(target) {
  target.annotation = true
}



function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function unenumerable(target, name, descriptor) {
  descriptor.enumerable = false
  return descriptor
}