const detectCycle = head => {
  if (head === null || head.next === null) {
      return false
  }

  let slow = head,
      fast = head.next
  while (fast !== slow) {
      if (fast === null || fast.next === null) {
          return false
      }
      slow = slow.next
      fast = fast.next.next
  }

  while (head !== slow) {
      head = head.next
      slow = slow.next
  }

  return head
}
