/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//solution1: recursion
var inorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const result = [];
  traversal(root, result);
  return result;
};

function traversal(root, result) {
  if (root === null) return;

  traversal(root.left, result);
  result.push(root.val);
  traversal(root.right, result);
}

//solution2: iteration
var inorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const stack = [];
  const result = [];
  let curr = root;
  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      const node = stack.pop();
      result.push(node.val);
      curr = node.right;
    }
  }
  return result;
};
