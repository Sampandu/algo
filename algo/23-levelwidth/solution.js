//solution1
const levelwidth = root => {
  if (root === null) {
    return
  }

  const arr = [root, null]
  const count = [0]

  while (arr.length > 1) {
    const node = arr.shift()
    if (node === null) {
      arr.push(null)
      continue
    } else {
      count[count.length - 1]++
      arr.push(...node.children)
    }
  }
  return count
}

//solution2
const levelWidth = root => {
  if (root === null) {
    return
  }

  const queue = [root],
        count = []
  while (queue.length) {
    const size = queue.length
    count.push(size)
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      queue.push(...node.children)
    }
  }
  return count
}
