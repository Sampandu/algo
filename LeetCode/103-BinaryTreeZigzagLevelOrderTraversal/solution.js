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
var zigzagLevelOrder = function(root) {
  if (root === null) return [];

  const queue = [root];
  const res = [];
  let direction = false; //a flag to derermine if the array is in direction or not
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (direction) {
      reverseArr(level);
    }
    res.push(level);
    direction = !direction;
  }
  return res;
};

function reverseArr(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
