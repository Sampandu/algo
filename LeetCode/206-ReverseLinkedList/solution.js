//solution 1
const reverseList = head => {
  //check param
  if (!head || !head.next) return head;

  let prev = head;
  let cur = prev.next;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  head.next = null;
  head = prev;

  return head;
};

//solution 2
const reverseList = head => {
  if (head === null) return null;

  let prev = null,
    cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
