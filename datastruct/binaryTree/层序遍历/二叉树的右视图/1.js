const rightSideView = (root) => {
  if (!root) return [];
  let queue = [root], res = []
  while (queue.length) {
    let size = queue.length;
    res.push(queue[size - 1].val)
    while (size--) {
      let node = queue.shift();
      if(size === 1) res.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return res
}