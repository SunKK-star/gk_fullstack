class MyCircularQueue {
  constructor(k) {
    this.list = Array(k);
    this.front = 0;
    this.tail = (front + used) % max;
    this.used = 0;
    this.max = k;
  }
  // 获取队首元素
  Front() {
    if(this.isEmpty()) {
      return -1;
    } else {
      return this.list[this.front]
    }
  }
  // 获取队尾元素
  Rear() {
    if(this.isEmpty()) {
      return -1;
    } else {
      return this.list[this.tail]
    }
  }
  // 从循环队列中插入元素
  enQueue() {
    if(this.isFull()) {
      console.log('队列已满');
    } else {
      
    }
  }
  // 从循环队列中删除元素
  deQueue() {

  }
  // 判断循环队列是否已满
  isFull() {
    if(this.front === this.real && this.used === this.max) {
      return true
    } else {
      return false
    }
  }
  // 判空
  isEmpty() {
    if(this.front == this.real && this.used == 0) {
      return true
    } else {
      return false
    }
  }
}