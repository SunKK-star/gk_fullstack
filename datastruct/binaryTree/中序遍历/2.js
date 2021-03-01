// 运用栈

const inorderTraversal = (root) => {
  let stk = [];
  let res = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    let node = stk.pop();
    res.push(node);
    root = node.right;
  }
  return res;
} 