let maxDepth = (root) => {
  if (!root) return null
  let level = 0
  let queue = [root]
  while(queue.length) { // 控制二叉树层次间循环 
    let size = queue.length
    while (size--) {
      let front = queue.shift()
      if (front.left) queue.push(front.left)
      if (front.right) queue.push(front.right)
    }
    level++
  }
  return level
}

