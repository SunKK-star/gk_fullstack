let sequence = (root) => {
  let arr = [root]  
  while (arr.length) {
    while (arr.length--) {
      let front = arr.shift()
      arr.push(front.left);
      arr.push(root.right);
    }
  }
}