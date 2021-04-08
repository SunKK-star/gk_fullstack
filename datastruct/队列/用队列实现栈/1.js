class Stack {
  constructor() {
    this.queue1 = []; // 让stack1始终保存队列首元素之后的值
    this.queue2 = []; // 让stack2始终保存队列元素的值，对应栈顶元素
  }
  push(x) {
    if (!this.queue2.length) {
      this.queue1.push(x)
    } else {
      this.queue2.push(x);
      this.queue1.push(this.queue2.shift())
    }
  }
  transform() {
    while (this.queue1.length !== 1) {
      this.queue2.push(this.queue1.shift())
    }
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('栈为空');
      return;
    } else {
      if (!this.queue2.length) this.transform();
      this.queue2.pop();
    }
  }
  peek() {
    if (this.isEmpty()) {
      console.log('栈为空');
      return;
    } else {
      if (!this.queue2.length) this.transform();
      return this.queue2[0]
    }

  }
  isEmpty() {
    return !this.queue1.length && !this.queue2.length
  }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop()
console.log(stack.peek());