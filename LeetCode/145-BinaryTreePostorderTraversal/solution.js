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
var postorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const result = [];
  traversal(root, result);
  return result;
};

function traversal(root, result) {
  if (root === null) return;

  traversal(root.left, result);
  traversal(root.right, result);
  result.push(root.val);
}

//solution2: iteration
var postorderTraversal = function(root) {
  if (root === null || root.length === 0) return [];

  const stack = [root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    result.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result;
};
