let minDepth = (root) => {
  if(!root) return 0
  let level = 0
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    
    while (size--) {
      let front = queue.shift()
      if (!front.left && !front.right) return level + 1
      if (front.left) queue.push(front.left)
      if (front.right) queue.push(front.right)
    }
    level++
  }
  return level
}