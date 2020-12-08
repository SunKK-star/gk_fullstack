// 递归法

const {Node, LinkedList}  = require("../lib/LinkedList");
let reverseLis = (head) => {
  let reserve = (pre, cur) => {
    if (!cur) return pre
    // 保留下一个节点的值
    let next = cur.next
    cur.next = pre
    return reserve(cur, next)
  }
  return reserve(null, head)
}

let list = new LinkedList(new Node('a'))
list.append(new Node('b'))
list.append(new Node('d'))
list.append(new Node('e'))
list.insert(new Node('c'),2)


let cur = list.head
console.log(reverseLis(cur));
console.log(list.toString());