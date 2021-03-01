// 运用递归

const inorderTraversal = (root) => {
  const res = [];
  const inorder = (root) => {
    if(!root) return 
    inorder(root.left)
    res.push(root.val);
    inorder(root.right)
  }
  inorder(root);
  return res;
}