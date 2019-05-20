class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add (data) {
    this.children.push(new Node(data))
  }

  remove (data) {
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }
}

class tree {
  constructor () {
    this.root = null
  }

  traverseBF (fn) {
    if (!this.root) {
      return
    }

    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      queue.push(...node.children)
      fn(node)
    }
  }

  traverseDF (fn) {
    if(!this.node) {
      return
    }

    const queue = [this.node]
    while (queue.length) {
      const node = queue.shift()
      queue.unshift(...node.children)
      fn(node)
    }
  }
}
