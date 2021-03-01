// 中序遍历
// 二叉搜索树经过中序遍历得到的序列一定是升序的

const isValidBST = (root) => {
  let prev = null;
  const orderTraversal = (root) => {
    if(!root) return true;
    orderTraversal(root.left);
    if(prev && prev >= root.val) return false;
    prev = root.val;
    orderTraversal(root.right);
 }
 return orderTraversal(root);
}