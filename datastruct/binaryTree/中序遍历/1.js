// 运用递归

let inorderTraversal = (root) => {
  let arr = [];
  let traverse = (node) => {
    if (node == null) return
    traverse(node.val);
    arr.push(node.val);
    traverse(node.right)
  }
  return arr
}