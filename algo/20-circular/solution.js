function circular(list) {
  //assume the input is not empty

  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}
