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
//solution1: recursion, top bottom, tree level
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

//solution2: iteration
var insertIntoBST = function(root, val) {
  if (root === null || val === null) return;

  let current = root;
  while (current !== null) {
    if (current.val > val && current.left) {
      current = current.left;
    } else if (current.val > val) {
      current.left = new TreeNode(val);
      break;
    } else if (current.val < val && current.right) {
      current = current.right;
    } else if (current.val < val) {
      current.right = new TreeNode(val);
      break;
    }
  }
  return root;
};
