// class Node {        
//   constructor(val) {
//       this.val = val;
//       this.next = null;
//   }
// }
// class LinkedList {  //传入和返回都是Node类型，第一个元素下标0
//   constructor(node) {   
//       this.head = node;
//       this.length = 1;
//   }
//   isEmpty(){
//       return !this.length;
//   }
//   append(node){   
//       var lastNode=this.findAsIndex(this.length-1);
//       lastNode.next=node;
//       this.length++;
//   }
//   insert(index,node){   //在哪个元素之前插入
//       var targetNode=this.findAsIndex(index-1);
//       node.next=targetNode.next;
//       targetNode.next=node;
//   }
//   remove(index){
//       var preNode=this.findAsIndex(index-1);
//       var nextNode=this.findAsIndex(index+1);
//       preNode.next=nextNode;
//   }
//   findAsIndex(index){   
//       if(index>this.length){
//           console.log('越界');
//           return
//       }
//       if(index===0){
//           return this.head;
//       }
//       var curNode=this.head; 
//       while(index&&curNode){
//           index--;
//           curNode=curNode.next;
//       }
//       return curNode;
//   }
//   toString(){
//       var curNode=this.head;
//       var arr=[];
//       var i=0;
//       while(curNode){
//           arr[i++]=curNode.val;
//           curNode=curNode.next;
//       }
//       return arr.toString();
//   }
// }


// module.exports = {
//     Node: Node,
//     LinkedList: LinkedList
// }


// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class LinkedList {  //传入和返回都是Node类型，第一个元素下标0
//     constructor(node) {
//         this.head = node;
//         this.length = 1;
//     }
//     isEmpty() {
//         return !this.length;
//     }
//     append(node) {
//         var lastNode = this.findAsIndex(this.length - 1);
//         lastNode.next = node;
//         this.length++;
//     }
//     insert(index, node) {   //在哪个元素之前插入
//         var targetNode = this.findAsIndex(index - 1);
//         node.next = targetNode.next;
//         targetNode.next = node;
//         this.length++;
//     }
//     remove(index) {
//         var preNode = this.findAsIndex(index - 1);
//         var nextNode = this.findAsIndex(index + 1);
//         preNode.next = nextNode;
//         this.length--;
//     }
//     findAsIndex(index) {
//         if (index > this.length) {
//             console.log('越界');
//             return
//         }
//         if (index === 0) {
//             return this.head;
//         }
//         var curNode = this.head;
//         while (index && curNode) {
//             index--;
//             curNode = curNode.next;
//         }
//         return curNode;
//     }
//     toString() {
//         var curNode = this.head;
//         var arr = [];
//         var i = 0;
//         while (curNode) {
//             arr[i++] = curNode.val;
//             curNode = curNode.next;
//         }
//         return arr.toString();
//     }
// }
// let list = new LinkedList(new Node('a'));
// list.append(new Node('b'));
// list.append(new Node('d'));

// list.insert(2, new Node('c'));

// console.log(list.findAsIndex(4));
// list.remove(1);

class Node {
    constructor(val) {
        this.val = val,
        this.next = null
    }
}
class LinkedList {
    constructor(node) {
        this.head = node,
        this.length = 1
    }
    isEmpty() {
        return !this.length
    }
    findAsIndex(idx) {
        if (idx > this.length) {
            console.log('越界了');
            return
        }
        if (idx === 0) {
            return this.head
        }
        let curNode = this.head
        while (idx) {
            curNode = curNode.next
            idx--
        }
        return curNode
    }
    append(node) {
        let lastNode = this.findAsIndex(this.length - 1)
        lastNode.next = node
        this.length++
    }
    insert(node, idx) {
        let pre = this.findAsIndex(idx - 1)
        node.next = pre.next
        pre.next = node  // 这一步不能放在前面，因为这会给pre.next重复赋值
        this.length++
    }
    remove(idx) {
        let pre = this.findAsIndex(idx - 1)
        let cur = this.findAsIndex(idx)
        pre.next = cur.next
        this.length--
    }
    toString() {
        let curNode = this.head
        let arr = []
        while (curNode) {
            arr.push(curNode.val)
            curNode = curNode.next
        }
        return arr
    }
}
module.exports = {
    Node: Node,
    LinkedList: LinkedList
} 

// let list = new LinkedList(new Node('a'))
// list.append(new Node('b'))
// list.append(new Node('d'))
// list.append(new Node('e'))
// list.insert(new Node('c'),2)
// console.log(list);
// console.log(list.toString());
