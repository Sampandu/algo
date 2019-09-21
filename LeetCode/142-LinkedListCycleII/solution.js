/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) return false;

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let chase = head;
      while (chase !== slow) {
        chase = chase.next;
        slow = slow.next;
      }
      return chase;
    }
  }
  return false;
};
