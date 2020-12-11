// 递归法
let swapPairs = (head) => {
  if (head === null || head.next === null) return head
  // newHead为交换后两两链表的头节点
  let newHead = head.next
  // 每一次的递归都实现两两链表的节点互换
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
