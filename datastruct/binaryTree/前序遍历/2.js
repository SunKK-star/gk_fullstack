let preorderTraversal = (root) => {
  if (root == null) return [];
  let stack = [], res = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    // 左孩子后进先出，进行先左后右的深度优先遍历
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res
}