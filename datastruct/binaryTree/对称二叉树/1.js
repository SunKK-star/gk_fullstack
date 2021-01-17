/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  let recersion = (leftNode, rightNode) => {
    if (!leftNode && !rightNode) return true;
    // 注意此处 leftNode.val !== rightNode.val 要放在 !leftNode || !rightNode 后面,因为若有一个节点不存在的话，强行比较会报错
    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
    return recersion(leftNode.right, rightNode.left) && recersion(leftNode.left, rightNode.right)
  }

  if (!root) return true
  return recersion(root.left, root.right)
};


