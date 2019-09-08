/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//solution1: top to bottom
var maxDepth = function(root) {
  if (root === null) return 0;

  const depth = { value: 0 };
  getMaxDepth(root, 0, depth);
  return depth.value;
};

function getMaxDepth(n, previousDepth, maxDepth) {
  if (n === null) return;

  const currentDepth = previousDepth + 1;
  if (currentDepth > maxDepth.value) maxDepth.value = currentDepth;

  getMaxDepth(n.left, currentDepth, maxDepth);
  getMaxDepth(n.right, currentDepth, maxDepth);
}

//solution2: bottom to top
var maxDepth = function(root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
