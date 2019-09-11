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
var isValidBST = function(root) {
  if (root === null) return true;

  return helper(root, null, null);
};

function helper(root, min, max) {
  if (root === null) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;

  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}
