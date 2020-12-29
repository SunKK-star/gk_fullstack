// 运用栈
let inorderTraversal = (root) => {
  if (root == null) return [];
  let stack = [], res = [];
  let p = root
  
  while (stack.length || p) {
    while (p) { // 考虑左子树情况
      stack.push(p);
      p = p.left
    }
    let cur = stack.pop();
    res.push(cur.val); // push值
    p = cur.right  // 考虑右子树情况
  }
  return res;
}





