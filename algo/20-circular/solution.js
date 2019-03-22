//solution
const circular = list => {
  //check param
  if(!list.head || !list.head.next) {
    return false
  }

  let slow = list.head,
      fast = list.head

  while (fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) return true
  }

  return false
}
