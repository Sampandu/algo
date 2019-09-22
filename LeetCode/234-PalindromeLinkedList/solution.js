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
//solution1: time O(n), space O(n)
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true;

  let copyList = null;
  let current = head,
    cur = null;
  while (current !== null) {
    const node = new ListNode(current.val);
    if (copyList === null) {
      copyList = node;
      cur = node;
    } else {
      cur.next = node;
      cur = cur.next;
    }
    current = current.next;
  }

  const revList = reverseLinkList(copyList);

  console.log(head, revList);
  (current = head), (cur = revList);
  while (current !== null) {
    if (current.val !== cur.val) return false; //compare both of the value instead of the nodes
    current = current.next;
    cur = cur.next;
  }
  return true;
};

function reverseLinkList(head) {
  let prev = null,
    cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
