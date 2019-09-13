/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//solution1: depth first search
var rangeSumBST = function(root, L, R) {
  if (root === null) return null;

  let res = 0;
  function dfs(root, L, R) {
    if (root === null) return;

    if (root) {
      if (L <= root.val && root.val <= R) res += root.val;
      if (L < root.val) dfs(root.left, L, R);
      if (root.val < R) dfs(root.right, L, R);
    }
  }
  dfs(root, L, R);
  return res;
};

//solution2: iteration
var rangeSumBST = function(root, L, R) {
  if (root === null) return;

  const stack = [root];
  let res = 0;
  while (stack.length !== 0) {
    const node = stack.pop();
    if (node !== null) {
      if (L <= node.val && node.val <= R) res += node.val;
      if (L < node.val) stack.push(node.left);
      if (node.val < R) stack.push(node.right);
    }
  }
  return res;
};
