function midpoint(list) {
  //assume the input is not empty

  //check the list is null or not
  if(!list.head) return null

  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
