// 迭代
const postorderTraversal = (root) => {
  let res = [], stk = [], visited = new Set();
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    let cur = stk.pop();
    if(cur.right && !visited.has(cur.right)) {
      visited.add(cur.right);
      stk.push(cur);
      root = root.right;
      return;
    } else {
      res.push(cur);
    }
  }
  return res;
}