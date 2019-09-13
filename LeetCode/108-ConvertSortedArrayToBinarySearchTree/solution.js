/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var sortedArrayToBST = function(nums) {
  if (nums === null || nums.length === 0) return;

  return getTree(nums, 0, nums.length - 1);
};

function getTree(nums, start, end) {
  if (start > end) return null;

  const mid = Math.floor(start + (end - start) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = getTree(nums, start, mid - 1);
  root.right = getTree(nums, mid + 1, end);
  return root;
}
