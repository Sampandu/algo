/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

//solution 1
var reverseBetween = function(head, m, n) {
  if (head === null) return null;

  // edge case: [3], m = 1, n = 1 or [3, 5], m = 1, n =1
  if (head.next === null) return head; //[3],1
  if (m === n) return head; //[3,5], 1,1

  let count = 1,
    subHead = null,
    subTail = null,
    prev = null,
    cur = null,
    current = head,
    left = null,
    right = null;
  while (current !== null) {
    if (m - 1 >= 1 && count === m - 1) {
      left = current;
    } else if (m - 1 < 1) {
      left = null;
    }

    if (count === m) {
      subHead = current;
      prev = current;
      cur = current.next;
    }
    if (count === n) {
      subTail = current;
      right = current.next;
    }
    count++;
    current = current.next;
  }

  while (cur !== subTail) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  cur.next = prev;

  if (left !== null) {
    left.next = subTail;
  } else {
    head = subTail;
  }
  subHead.next = right;

  return head;
};

//solution2
var reverseBetween = function(head, m, n) {
  if (head === null) return null;

  if (head.next === null) return head;

  if (m === n) return head;

  let prev = null,
    cur = head,
    count = 1;
  let con = null, //left boundry of the sublist
    tail = null;
  while (count <= n) {
    if (count < m) {
      prev = cur;
      cur = cur.next;
      count++;
      continue;
    }

    if (count === m) {
      con = prev;
      tail = cur;
    }
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    count++;
  }

  if (con !== null) {
    con.next = prev;
  } else {
    //if m is 1, con is null
    head = prev;
  }
  tail.next = cur;
  return head;
};
