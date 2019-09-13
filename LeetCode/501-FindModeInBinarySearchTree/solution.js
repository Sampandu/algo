/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//solution1
var findMode = function(root) {
  if (root === null || root.length) return [];

  const map = {};
  inorderTraverse(root, map);
  console.log(map);
  let result = [];
  let max = -Infinity;
  for (key in map) {
    if (map[key] > max) {
      max = map[key];
      result = [key];
    } else if (map[key] === max) {
      result.push(key);
    }
  }
  return result;
};

function inorderTraverse(root, map) {
  if (root === null) return;

  inorderTraverse(root.left, map);
  if (root.val in map) {
    map[root.val]++;
  } else {
    map[root.val] = 1;
  }
  inorderTraverse(root.right, map);
}

//solution2
var findMode = function(root) {
  if (root === null || root.length) return [];

  const map = {};
  let res = { max: -Infinity, values: [] };
  inorderTraverse(root, map, res);
  return res.values;
};

function inorderTraverse(root, map, res) {
  if (root === null) return;

  inorderTraverse(root.left, map, res);
  if (root.val in map) {
    map[root.val]++;
  } else {
    map[root.val] = 1;
  }
  if (map[root.val] > res.max) {
    res.max = map[root.val];
    res.values = [root.val];
  } else if (map[root.val] === res.max) {
    res.values.push(root.val);
  }
  inorderTraverse(root.right, map, res);
}
