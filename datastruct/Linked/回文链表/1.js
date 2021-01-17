/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function(head) {
  let reverse = (pre, cur) => {
      if(!cur) return pre
      let next = cur.next;
      cur.next = pre;
      return reverse(cur, next)
  }
  let dummyHead = slow = fast = new ListNode()
  dummyHead.next = head
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let next = slow.next;
  slow.next = null;
  let newStart = reverse(null, next);
  for (let p = head, newP = newStart;newP !== null; p = p.next, newP = newP.next) {
      if(p.val !== newP.val) return false
  }
  return true
}; 