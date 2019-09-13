/*
 * class TreeNode {
 *   constructor(val) {
 *     this.val = val
 *     this.left = null
 *     this.right = null
 *   }
 * }
 */

function inorderSuccessor(root, n) {
  if (n.right !== null) {
    let current = n.right;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  } else {
    let current = root,
      successor = null;
    while (current !== null) {
      if (current.val > n.val) {
        successor = current;
        current = current.left;
      } else if (current.val < n.val) {
        current = current.right;
      } else if (current === n) {
        break;
      }
    }
    return successor;
  }
}
