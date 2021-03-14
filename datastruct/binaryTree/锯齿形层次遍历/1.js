let zigzagLevelOrder = (root) => {
  if (!root) return [];
  let stk = [root], result = [], level = 0;
  while (stk.length) {
    let size = stk.length;
    let res = [];
    while (size--) {
      let cur = stk.pop();
      res.push(cur.val);
      if (level % 2 === 0) {
        if (cur.right) stk.push(cur.right);
        if (cur.left) stk.push(cur.left);

      } else {
        if (cur.left) stk.push(cur.left);
        if (cur.right) stk.push(cur.right);
      }
    }
    level++
    result.push(res);
  }
  return result;
}