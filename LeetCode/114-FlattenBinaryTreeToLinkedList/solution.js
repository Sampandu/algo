/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return null;

  const arr = [];
  preorder(root, arr);

  let current = root;
  for (let i = 1; i < arr.length; i++) {
    current.left = null;
    current.right = new TreeNode(arr[i]);
    current = current.right;
  }
};

function preorder(node, arr) {
  if (node === null) {
    return;
  }

  arr.push(node.val);
  node.left && preorder(node.left, arr);
  node.right && preorder(node.right, arr);
}
