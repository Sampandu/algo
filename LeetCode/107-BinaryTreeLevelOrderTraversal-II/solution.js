/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//solution1
var levelOrderBottom = function(root) {
  if (root === null) {
    return [];
  }

  const queue = [root],
    res = [];
  while (queue.length) {
    const size = queue.length;
    const subArr = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node === null) {
        continue;
      }
      subArr.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
    if (subArr.length !== 0) {
      res.unshift(subArr);
    }
  }
  return res;
};

//solution2: generic and clean BFS
var levelOrderBottom = function(root) {
  if (root === null) return [];

  const queue = [root];
  const res = [];
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      level.push(node.val);
    }
    res.unshift(level);
  }
  return res;
};
