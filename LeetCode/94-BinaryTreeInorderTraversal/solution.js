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

//solution2: iteration, space O(1)
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

//solution3: iteration, space O(n)
var inorderTraversal = function(root) {
  if (root === null) return [];

  const visited = new Set();
  const stack = [root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) {
      node !== null && result.push(node.val);
    } else {
      if (node !== null && node.rigth !== null) {
        stack.push(node.right);
      }
      visited.add(node);
      stack.push(node);
      if (node !== null && node.left !== null) {
        stack.push(node.left);
      }
    }
  }
  return result;
};
