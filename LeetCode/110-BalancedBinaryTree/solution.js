/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//solution: bottom to top
var isBalanced = function(root) {
  if (root === null) return false;

  return isBalancedHelper(root) !== -1;
};

function isBalancedHelper(node) {
  if (node === null) return 0;

  const leftHeight = isBalancedHelper(node.left);
  const rightHeight = isBalancedHelper(node.right);

  if (leftHeight === -1 || rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}
