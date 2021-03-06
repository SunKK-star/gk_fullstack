
// 迭代法
const {Node, LinkedList} = require('../lib/LinkedList')

let reverseLis = (head) => {
  if (!head) return null
  let cur = head
  let pre = null
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

let list = new LinkedList(new Node('a'))
list.append(new Node('b'))
list.append(new Node('d'))
list.append(new Node('e'))
list.insert(new Node('c'),2)


let cur = list.head
console.log(reverseLis(cur));
console.log(list.toString());


