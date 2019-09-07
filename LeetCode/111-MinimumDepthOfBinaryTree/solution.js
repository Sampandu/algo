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
var minDepth = function(root) {
  if (root === null) return 0;

  const minDepth = { value: Infinity };
  getMinDepth(root, 0, minDepth);
  return minDepth.value;
};

function getMinDepth(n, previousDepth, minDepth) {
  const currentDepth = previousDepth + 1;

  if (!n.left && !n.right) {
    if (currentDepth < minDepth.value) minDepth.value = currentDepth;
    return;
  }

  n.left && getMinDepth(n.left, currentDepth, minDepth);
  n.right && getMinDepth(n.right, currentDepth, minDepth);
}
