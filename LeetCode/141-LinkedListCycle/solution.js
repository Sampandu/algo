/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//solution 1: using set to keep track of visited nodes
var hasCycle = function(head) {
  if (head === null) return false;

  const set = new Set();
  let current = head;
  while (current) {
    if (set.has(current)) return true;
    else {
      set.add(current);
      current = current.next;
    }
  }
  return false;
};

//solution 2: slow, fast pointer
var hasCycle = function(head) {
  if (head === null) return false;

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
