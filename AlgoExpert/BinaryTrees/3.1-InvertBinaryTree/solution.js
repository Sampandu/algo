function invertBinaryTree(tree) {
  if (tree === null) return null;

  const queue = [tree];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) continue;

    if (node.left && node.right) {
      swapLeftAndRight(node);
      queue.push(node.left);
      queue.push(node.right);
    } else if (node.left) {
      swapLeftAndRight(node);
      queue.push(node.left);
    } else if (node.right) {
      swapLeftAndRight(node);
      queue.push(node.right);
    }
  }
  return tree;
}

function swapLeftAndRight(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}
