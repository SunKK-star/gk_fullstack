// 递归实现
const sortedArrarToBST = (nums) => {
  let help = (start, end) => {
    if(start > end) return null;
    if(start == end) return new TreeNode(nums[start]);
    let mid = Math.floor((start + end) / 2);
    // 找出中点建立节点
    let node = new TreeNode(nums[mid]);
    node.left = help(start, mid - 1);
    node.right = help(mid + 1, end);
    return node
  }
  return help(0, nums.length - 1)
}

var sortedArrayToBST = function(nums) {
  let help = (start, end) => {
      if(start > end) return null;
      if(start === end) return new TreeNode(nums[start]);
      let mid = Math.floor((start + end) / 2);
      // 找出中点建立节点
      let node = new TreeNode(nums[mid]);
      node.left = help(start, mid - 1);
      node.right = help(mid + 1, end);
      return node;
  }
  return help(0, nums.length - 1);
};
