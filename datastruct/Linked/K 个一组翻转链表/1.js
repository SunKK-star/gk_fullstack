let reserve = (head, tail) => {
  let pre = tail.next, cur = head
  while (cur != tail.next) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return [pre, head]
}

let reverseKGroup = (head, k) => {
  let dummyHead = new ListNode()
  dummyHead.next = head
  let pre = dummyHead
  while (head) {
    let tail = head
    for (let i = 0; i < k - 1; i++) {
      tail = tail.next
      if (!tail) {
        return dummyHead.next
      }
      let nex = tail.next
      [newHead, newTail] = reserve(head, tail)
      pre.next = newHead
      pre = newTail
      head = nex
    }
  }
  return dummyHead.next
}