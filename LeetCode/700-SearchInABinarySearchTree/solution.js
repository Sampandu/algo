/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null || val === null) return null;

  return search(root, val);
};

function search(root, val) {
  if (root.val === val) return true;

  if (val < root.val && root.left) {
    return search(root.left, val);
  } else if (val > root.val && root.right) {
    return search(root.right, val);
  }

  return null;
}
