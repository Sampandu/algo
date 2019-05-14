//solution1
//assume two links are interseted.
const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) {
    return null
  }

  let p1 = headA,
      p2 = headB
  while (p1 !== p2) {
    p1 = p1 !== null ? p1.next : headB
    p2 = p2 !== null ? p2.next : headA
  }
  return p1
}

//solution2
const getIntersectionNode = function (headA, headB) {
    // write your code here
    if (headA === null || headB === null) {
        return 'No intersection'
    }

    let tail = headA
    while (tail.next !== null) {
        tail = tail.next
    }

    tail.next = headB

    let slow = headA,
        fast = headA.next
    while (fast !== slow) {
        if (fast === null || fast.next === null) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
    }

    let head = headA
    while (head !== slow) {
        head = head.next
        slow = slow.next
    }

    return head
}
