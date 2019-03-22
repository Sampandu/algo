//solution1
const midpoint = list => {
  //check param
  if (!list.head) {
    return
  }

  if (!list.head.next) {
    return list.head
  }

  let slow = list.head,
      fast = list.head

  while(fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // while (fast) {
  //   if (fast.next && fast.next.next) {
  //     fast = fast.next.next
  //     slow = slow.next
  //   } else {
  //     break
  //   }
  // }

  return slow
}
