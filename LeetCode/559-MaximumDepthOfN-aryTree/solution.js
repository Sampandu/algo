/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
//top to bottom
var maxDepth = function(root) {
  if (root === null) return 0;

  const max = { value: 0 };
  getMaxDepth(root, 0, max);
  return max.value;
};

function getMaxDepth(node, prevHeight, max) {
  if (node === null) return 0;

  const currentHeight = prevHeight + 1;
  if (currentHeight > max.value) max.value = currentHeight;
  for (let i = 0; i < node.children.length; i++) {
    getMaxDepth(node.children[i], currentHeight, max);
  }
}
