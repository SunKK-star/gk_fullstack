class Node {        
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}
class LinkedList {  //传入和返回都是Node类型，第一个元素下标0
  constructor(node) {   
      this.head = node;
      this.length = 1;
  }
  get isEmpty(){
      return !this.length;
  }
  append(node){   
      var lastNode=this.findAsIndex(this.length-1);
      lastNode.next=node;
      this.length++;
  }
  insert(index,node){   //在哪个元素之前插入
      var targetNode=this.findAsIndex(index-1);
      node.next=targetNode.next;
      targetNode.next=node;
  }
  remove(index){
      var preNode=this.findAsIndex(index-1);
      var nextNode=this.findAsIndex(index+1);
      preNode.next=nextNode;
  }
  findAsIndex(index){   
      if(index>this.length){
          console.log('越界');
          return
      }
      if(index===0){
          return this.head;
      }
      var curNode=this.head; 
      while(index&&curNode){
          index--;
          curNode=curNode.next;
      }
      return curNode;
  }
  toString(){
      var curNode=this.head;
      var arr=[];
      var i=0;
      while(curNode){
          arr[i++]=curNode.val;
          curNode=curNode.next;
      }
      return arr.toString();
  }
}


module.exports = {
    Node: Node,
    LinkedList: LinkedList
}
