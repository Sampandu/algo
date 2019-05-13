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
