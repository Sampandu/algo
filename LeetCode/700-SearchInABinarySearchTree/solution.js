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
//solution1: top bottom, recursion
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

//solution2, iteration
var searchBST = function(root, val) {
  if (root === null || val === null) return null;

  let current = root;
  while (current !== null) {
    if (current.val === val) {
      return current;
    } else if (current.val < val) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  return null;
};
