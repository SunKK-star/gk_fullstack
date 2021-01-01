class Node {
  constructor (data) {
    this.data = data,
    this.root = this,
    this.left = null,
    this.right = null
  }
}

class BST {
  constructor () {
    this.root = null
  }
  insertNode (node, newNode) {
    if (node.data < newNode.data) {
      if (node.left == null) {
        node.left = newNode
      } else {
        insertNode (node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        insertNode (node.right, newNode)
      }
    }

    if (!this.root) {
      this.root = newNode
    }else {
      this.insertNode(this.root, newNode)
    }
  };
}