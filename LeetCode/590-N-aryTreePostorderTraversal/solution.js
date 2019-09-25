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
//solution1: iteratively
var postorder = function(root) {
  if (root === null) return [];

  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    node.children && stack.push(...node.children);
  }
  return res;
};

//solution2: recursive
var postorder = function(root) {
  if (root === null) return [];
  const res = [];
  postTraverse(root, res);
  return res;
};

function postTraverse(node, res) {
  if (node === null) return;

  for (let i = 0; i < node.children.length; i++) {
    postTraverse(node.children[i], res);
  }
  res.push(node.val);
}
