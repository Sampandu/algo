/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  if (root === null) {
    return '';
  }

  const queue = [root],
    res = [];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      res.push('null');
      continue; //missing
    }
    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  //remove all of the 'null' at the end of the res
  while (res[res.length - 1] === 'null') {
    res.pop();
  }
  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = data => {
  if (data === null || data.length === 0) {
    return null;
  }

  const arr = data.split(','),
    root = new TreeNode(parseInt(arr[0])),
    queue = [root];
  for (let i = 1; i < arr.length; i++) {
    const node = queue.shift();
    if (arr[i] !== 'null') {
      node.left = new TreeNode(parseInt(arr[i]));
      queue.push(node.left);
    }
    i++;
    if (arr[i] !== 'null' && i < arr.length) {
      node.right = new TreeNode(parseInt(arr[i]));
      queue.push(node.right);
    }
  }
  return root;
};
