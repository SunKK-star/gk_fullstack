const {Node,LinkedList}  = require("../lib/LinkedList.js");
let list=new LinkedList(new Node('head'));
let reverseLis = (head) => {
  if (!head) return null
  let pre = null, cur = head;
  while (cur) {
    // 关键 保留下一个节点的值
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next
  }
  return pre
}
let listnode = new ListNode(head)





let list=new LinkedList(new Node('a'));
list.append(new Node('b'));
list.append(new Node('d'));
list.insert(2,new Node('c'));
list.remove(1);
console.log(list.toString())