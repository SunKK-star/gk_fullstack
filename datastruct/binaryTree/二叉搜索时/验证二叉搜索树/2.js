// 限定上下边界进行遍历
let helper = (node, lower, upper) => {
  if(node === null) return true;
  if(node.val >= upper || node.val <= lower) return false;
  return helper(node.left, lower, node.val) && helper(node.right, node.val, upper)
}

const isValidBST = (root) => {
  helper(root, -Infinity, Infinity)
}