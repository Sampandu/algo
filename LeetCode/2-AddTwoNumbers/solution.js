/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//solution1,
var addTwoNumbers = function(l1, l2) {
  if (l1 === null && l2 === null) return null;

  if (l1 === null) return l1;
  if (l2 === null) return l2;

  const arr1 = changeIntoArray(l1);
  const arr2 = changeIntoArray(l2);

  const large = arr1.length > arr2.length ? arr1 : arr2;
  const small = arr1.length > arr2.length ? arr2 : arr1;

  let carry = 0;
  const res = [];
  // let head = null, current = null
  for (let i = 0; i < large.length; i++) {
    const sum = large[i] + (i < small.length ? small[i] : 0) + carry;
    carry = Math.floor(sum / 10);
    res[i] = sum % 10;
    // const node = new ListNode(sum % 10)
    // head === null ? head = node : current.next = node
    // current = node
  }
  if (carry !== 0) {
    res[large.length] = carry;
    // current.next = new ListNode(carry)
  }

  let head = null,
    current = null;
  for (let i = 0; i < res.length; i++) {
    const node = new ListNode(res[i]);
    head === null ? (head = node) : (current.next = node);
    current = node;
  }
  return head;
};

function changeIntoArray(list) {
  const res = [];
  while (list !== null) {
    res.push(Number(list.val));
    list = list.next;
  }
  return res;
}

//solution2, cause heap overflow
var addTwoNumbers = function(l1, l2) {
  if (l1 === null && l2 === null) return null;

  if (l1 === null) return l1;
  if (l2 === null) return l2;

  let carry = 0;
  let head = null,
    current = null;
  while (l1 !== null && l2 !== null) {
    const sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    head === null ? (head = node) : (current.next = node);
    current = node;
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l1 !== null) {
    while (l1 !== null) {
      const sum = l1.val + carry;
      carry = Math.floor(sum / 10);
      const node = new ListNode(sum % 10);
      current.next = node;
      current = node;
    }
  } else {
    while (l2 !== null) {
      const sum = l2.val + carry;
      carry = Math.floor(sum / 10);
      const node = new ListNode(sum % 10);
      current.next = node;
      current = node;
    }
  }

  if (carry !== 0) {
    const node = new ListNode(carry);
    current.next = node;
  }
  return head;
};
