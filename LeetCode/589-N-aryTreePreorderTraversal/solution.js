/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (root === null) return [];

  const stack = [root];
  const res = [];
  while (stack.length) {
    const node = stack.shift();
    node !== null && res.push(node.val);
    stack.unshift(...node.children);
  }
  return res;
};
