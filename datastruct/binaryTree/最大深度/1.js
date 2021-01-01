let maxDepth = (root) => {
  // 递归终止条件
  if ( root = null ) return 
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
}



