const levelOrder  = (root) => {
  let ans = [], cur = [root], next = [];
  while (cur.length) {
    cur.map(item => {
      if(item.left) next.push(item.left);
      if(item.right) next.push(item.right);
    });
    ans.push(cur);
    cur = next;
    next = [];
  }
  return ans
}