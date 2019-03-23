//solution1
const fromLast = (list, n) => {
  let slow = list.head,
      fast = list.head,
      counter = 0

  while (fast.next) {
    if (counter < n) {
      fast = fast.next
      counter++
    } else {
      fast = fast.next
      slow = slow.next
    }
  }

  return slow
}

//solution2
const fromLast = (list, n) => {
  let slow = list.head
  let fast = list.head

  while (n > 0) {
    fast = fast.next
    n--
  }

  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
