let reverseKGroup = (head, k) => {
  let pre = null, cur = head
  let p = head
  for (let i = 0; i < k; i++) {
    if (p == null) return p
    p = p.next
  }
  for (let i = 0; i < k - 1; i++) {
    // 注意需要保存当前节点的下一个节点
    let next = cur.next
    cur.next = pre
    pre = cur
  }

  head.next = reverseKGroup(next, k)
  return pre
}