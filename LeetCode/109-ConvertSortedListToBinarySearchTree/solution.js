/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var sortedListToBST = function(head) {
  if (head === null || head.length === 0) return null;

  const array = [];
  let current = head;
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }
  return getTree(array, 0, array.length - 1);
};

function getTree(array, start, end) {
  if (start > end) return null;

  const mid = Math.floor(start + (end - start) / 2);
  const root = new TreeNode(array[mid]);
  root.left = getTree(array, start, mid - 1);
  root.right = getTree(array, mid + 1, end);
  return root;
}
