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
//bottom top
var diameterOfBinaryTree = function(root) {
  if (root === null) return 0;

  const maxPath = { value: 0 };
  findDiameter(root, maxPath);
  return maxPath.value;
};

function findDiameter(node, maxPath) {
  if (node === null) return -1;

  const leftHeight = findDiameter(node.left, maxPath);
  const rightHeight = findDiameter(node.right, maxPath);

  if (leftHeight + rightHeight + 2 > maxPath.value) {
    maxPath.value = leftHeight + rightHeight + 2;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}
