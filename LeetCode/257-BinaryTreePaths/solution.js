/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return [];

  const results = [];
  findTreePaths(root, [], results);
  return results;
};

function findTreePaths(n, temp, results) {
  temp.push(n.val);

  if (!n.left && !n.right) {
    const path = temp.join('->');
    results.push(path);
    return;
  }

  n.left && findTreePaths(n.left, [...temp], results);
  n.right && findTreePaths(n.right, [...temp], results);
}
