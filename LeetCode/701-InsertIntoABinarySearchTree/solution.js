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
var insertIntoBST = function(root, val) {
  if (root === null || val === null) return;

  insert(root, val);
  return root;
};

function insert(root, val) {
  if (root.val > val && root.left) {
    insert(root.left, val);
  } else if (root.val > val) {
    root.left = new TreeNode(val);
  } else if (root.val < val && root.right) {
    insert(root.right, val);
  } else if (root.val < val) {
    root.right = new TreeNode(val);
  }
}
