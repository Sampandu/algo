/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;

  //search the node that has the same value as key
  //if node is found, delete it, otherwise return root

  if (root.val > key) {
    if (!root.left) return root;
    else root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    if (!root.right) return root;
    else root.right = deleteNode(root.right, key);
  } else {
    //root.val === val
    if (!root.left || !root.right) {
      ////case1 + 2: root is leaf node or has one child node
      return root.left || root.right;
    } else {
      const newNode = new TreeNode();
      let right = root.right;
      //find the left most node in the right subtree
      while (right.left !== null) {
        right = right.left;
      }
      newNode.val = right.val;
      newNode.left = root.left;
      newNode.right = deleteNode(root.right, right.val);
      return newNode;
    }
  }
  //case4: key is not found in the BST
  return root;
};
