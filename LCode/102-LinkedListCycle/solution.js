//solution1
const hasCycle = function (head) {
  // write your code here
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
  return true
}

//solution2 using map
