// 非递归实现
// 用一个队列保存访问过的节点，每次取出两个节点，进行比较。循环队列，按顺序push要比较的节点
let isSymmetrc = (root) => {
  if(!root) return true
  let queue = [root.left, root.right];
  let node1, node2;
  while (queue.length) {
    node1 = queue.shift();
    node2 = queue.shift();
    if(!node1 && !node2) continue
    if(!node1 || node2 || node1.val !== node2.val) return false
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true
} 