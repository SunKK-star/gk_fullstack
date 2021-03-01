// 限定上下边界非递归实现

const isValidBST = (root) => {
  if(root === null) return true;
  let satck = [root];
  let max = Number.MAX_SAFE_INTEGER;
  let min = Number.MIN_SAFE_INTEGER;
  root.min = min;root.max = max;
  while(satck.length) {
    let node = stack.pop();
    if(node.val <= node.min || node.val >= node.max) return false;
    if(node.left) {
      stack.push(node.left);
      // 更新上下边界
      node.left.min = node.min;
      node.left.max = node.val;
    }
    if(node.right) {
      stack.push(node.right);
      // 更新上下边界
      node.right.min = node.val;
      node.right.max = node.max;
    }
  }
  return true;
}