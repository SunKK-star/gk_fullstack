let postorderTraversal = (root) => {
  let res = [];
  let traverse = (node) => {
    if (node == null) return
    traverse(node.left);
    traverse(node.right);
    res.push(node.val)
  }
  traverse(root)
  return res
}