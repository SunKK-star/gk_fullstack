// 迭代法
const {Node, LinkedList}  = require("../lib/LinkedList");
let reverseBetween = (head, m, n) => {
  let count = n - m;
    let p = dummyHead = new ListNode();
    let pre, cur, start, tail;
    p.next = head;
    for(let i = 0; i < m - 1; i ++) {
        p = p.next;
    }
    // 保存前节点
    front = p;
    // 同时保存区间首节点
    pre = tail = p.next;
    cur = pre.next;
    // 区间反转
    for(let i = 0; i < count; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 前节点的 next 指向区间末尾
    front.next = pre;
    // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
    tail.next = cur;
    return dummyHead.next;
}

let list = new LinkedList(new Node('a'))
list.append(new Node('b'))
list.append(new Node('d'))
list.append(new Node('e'))
list.insert(new Node('c'),2)


let cur = list.head

console.log(reverseBetween(cur,1,2));
console.log(list.toString());

