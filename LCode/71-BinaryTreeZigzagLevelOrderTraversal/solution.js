const zigzagLevelOrder = function (root) {
  // write your code here
  if (root === null) {
      return []
  }

  const queue = [root],
        result = []
  while (queue.length) {
      const size = queue.length,
            subRes = []
      let isLeftToRight = result.length % 2 === 0 ? true : false

      for (let i = 0; i < size; i++) {
          const node = queue.shift()
          if (node === null) {
              continue
          }
          if (isLeftToRight) {
              subRes.push(node.val)
          } else {
              subRes.unshift(node.val)
          }
          queue.push(node.left)
          queue.push(node.right)
      }
      if (subRes.length !== 0) {
          result.push(subRes)
      }
   }
   return result
}
