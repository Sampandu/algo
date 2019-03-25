//solution
const reverseList = head => {
  //check param
  if(!head || !head.next) return head

  let prev = head
  let cur = prev.next
  while (cur) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  head.next = null
  head = prev

  return head
}
