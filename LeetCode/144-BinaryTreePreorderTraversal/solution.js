//solution1: recursion
var preorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const result = [];
  traversal(root, result);
  return result;
};

function traversal(root, result) {
  if (root === null) return;

  result.push(root.val);
  traversal(root.left, result);
  traversal(root.right, result);
}

//solution2: iteration
var preorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const stack = [root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};
