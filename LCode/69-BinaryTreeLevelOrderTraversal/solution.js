//solution1
const levelOrder = function (root) {
    // write your code here
    if (root === null) {
        return []
    }

    const queue = [root],
          result = []
    while (queue.length) {
        const size = queue.length,
             level = []
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
            level.push(node.val)
        }
        result.push(level)
    }
    return result
}

//solution2, use dummy node
const levelOrder = root => {
  if (root === null) {
    return
  }

  const queue = [root, null],
        result = []
  let level = []
  while (queue.length > 1) {
    const node = queue.shift()

    if (node === null) {
      queue.push(null)
      result.push(level)
      level = []
      continue
    }

    level.push(node.val)
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }
  result.push(level)

  return result
}
