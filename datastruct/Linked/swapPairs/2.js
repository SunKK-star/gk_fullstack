// 递归法
let swapPairs = (head) => {
  if (head === null || head.next === null) return head
  let node1 = head, node2 = head.next
  node1.next = node2.next
  node2.next = node1
  head = head.next
  swapPairs(head)
}
