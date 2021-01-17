// 祖先节点收集法
// 利用层序遍历和weakmap方法建立子节点与父节点的映射关系
// 利用set方法存储自身节点和所有的父节点
let lowestCommonAncestor = (root, p, q) => {
  if(!root || root === p || root == q) return root
  let set = new Set()
  let map = new WeakMap()
  let queue = [root]
  while (queue.length) {
    // 保存二叉树每一层的节点个数
    let size = queue.length
    while (size--) {
      let front = queue.shift();
      if(front.left) {
        queue.push(front.left)
        // 主义weakmap的key值只能是对象
        map.set(front.left, front)
      }
      if(front.right) {
        queue.push(front.right)
        // 主义weakmap的key值只能是对象
        map.set(front.right, front)
      }
    }
  }

  // 保存p节点所有的父节点
  while (p) {
    set.add(p)
    p = map.get(p)
  }
  while (q) {
    if(set.has(q)) return q
    q = map.get(q)
  }
}