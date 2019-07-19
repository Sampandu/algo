class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value >= this.value) {
      //important!!! assume the duplicated value will be placed to the right subtree. If the duplicated value is placed to the left subtree, the testing will have different result.
      if (this.right === null) this.right = new BST(value);
      else this.right.insert(value);
    } else {
      if (this.left === null) this.left = new BST(value);
      else this.left.insert(value);
    }
    return this;
  }

  contains(value) {
    if (value < this.value) {
      if (this.left === null) return false;
      else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) return false;
      else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  remove(value, parent = null) {
    if (!this.contains(value)) return this;

    let currentNode = this;
    while (true) {
      if (value === currentNode.value) {
        break;
      } else if (value < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //typo currentNode.right
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }

    if (currentNode.left !== null && currentNode.right !== null) {
      currentNode.value = currentNode.right.getMinValue();
      currentNode.right.remove(currentNode.value, currentNode);
    } else if (parent === null) {
      if (currentNode.left !== null) {
        currentNode.value = currentNode.left.value;
        currentNode.right = currentNode.left.right;
        currentNode.left = currentNode.left.left;
      } else if (currentNode.right !== null) {
        currentNode.value = currentNode.right.value;
        currentNode.left = currentNode.right.left;
        currentNode.right = currentNode.right.right;
      } else {
        currentNode.value = null;
      }
    } else if (parent.left === currentNode) {
      parent.left =
        currentNode.left !== null ? currentNode.left : currentNode.right;
    } else if (parent.right === currentNode) {
      parent.right =
        currentNode.left !== null ? currentNode.left : currentNode.right;
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
