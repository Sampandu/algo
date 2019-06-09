/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node === null) {
    return;
  }

  const root = new Node(node.val, []);
  const seen = {};
  seen[root.val] = root;
  const queue = [node];

  while (queue.length) {
    const curr = queue.shift();
    curr.neighbors.forEach(neighbor => {
      if (!seen[neighbor.val]) {
        seen[neighbor.val] = new Node(neighbor.val, []);
        queue.push(neighbor);
      }

      seen[curr.val].neighbors.push(seen[neighbor.val]);
    });
  }
  return root;
};
