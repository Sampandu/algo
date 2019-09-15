/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
//BFS + set
var findTarget = function(root, k) {
  if (root === null) return null;

  const set = new Set();
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node !== null) {
      const diff = k - node.val;
      if (set.has(diff)) return true;

      set.add(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return false;
};
