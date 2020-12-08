// 递归法
let reverseBetween = (head, m, n) => {
  let reserve = (pre, cur) => {
    if (!cur) return pre
    // 保存next节点
    let next = cur.next
    cur.next = pre
    return reserve(cur, next)
  }
  let count = m - n
  let p = dummyHead = new ListNode()
  p.next = head
  dummyHead.next = head
  let start, end // 区间的首尾节点
  let front, tail // 区间的前后节点
  for (let i = 0;i < m - 1;i++) {
    p = p.next
  }
  front = p
  start = front.next
  for (let j = m - 1; j < n; j++) {
    p = p.next
  }
  end = p
  tail = end.next
  end.next = null
  let newstart = reserve(null,start)
  front.next = newstart
  start.next = tail
  return dummyHead.next
 }