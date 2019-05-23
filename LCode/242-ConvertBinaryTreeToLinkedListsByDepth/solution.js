//solution --- not tested
/**
 * Definition of TreeNode in Java:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 * Definition for singly-linked list in Java.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

const binaryTreeToLists = root => {
  if (root === null) {
    return []
  }

  const queue = [root],
        result = []
  const duummy = new ListNode(0)
  let lastNode = null

  while (queue.length) {
    const size = queue.length
    //reset the link list for each level
    dummy.next = null
    lastNode = dummy
    for (let i = 0; i < size; i++) {
      const head = queue.shift()
      lastNode.next = new ListNode(head.val)
      lastNode = lastNode.next

      if (head.left !== null) {
        queue.push(head.left)
      }
      if (head.right !== null) {
        queue.push(head.right)
      }
    }
    result.push(dummy.next)
  }
  return result
}
