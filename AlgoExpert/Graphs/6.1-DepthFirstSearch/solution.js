class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      array.push(node.name);
      queue.unshift(...node.children);
    }
    return array;
  }
}
