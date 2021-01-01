let minDepth = (root) => {
  if (!root) return 0
  // return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
  // 有陷阱 当root有一个子节点为空时，返回的值是1，这是不对的，因为最小深度值的
  // 是根节点到路径最短的叶子节点的深度，并非是根节点到一个空节点的路径
  if(root.left && root.right) {
    return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
  }
  else if(root.left && !root.right) {
    return minDepth(root.left) + 1
  }
  else if (root.right && !root.left) {
    return minDepth(root.right) + 1
  }
  else return 1
}