class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    this.stack1.push(x);
  }
  transform() {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  pop() {
    if (!this.stack1.length) this.transform();
    this.stack2.pop()
  }
  peek() {
    if (!this.stack1.length) this.transform()
    return this.stack2[this.stack2.length - 1]
  }
  isEmpty() {
    return !this.stack2.length && !this.stack1.length
  }
}


let queue = new Queue()
queue.push(1);
queue.push(2)
queue.push(3);
console.log(queue.isEmpty());