//solution
const swapPairs = head => {
  //check params
  if(!head || !head.next) return head

  let prev,
      newHead,
      node = head

  while (node && node.next) {
    let newSwap = node.next.next
    let first = node,
        second = first.next

    second.next = first
    first.next = newSwap

    if(prev) prev.next = second
    if(!newHead) newHead = second

    prev = first
    node = newSwap
  }

  return newHead
}
