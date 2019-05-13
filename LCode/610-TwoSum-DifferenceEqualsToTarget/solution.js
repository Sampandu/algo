const twoSum7 = (nums, target) => {
  if (nums === null || nums.length === 0) {
    return null
  }

  if (nums.length === 1 || target === null) {
    return []
  }

  target = Math.abs(target)
  let pair = []
  for (let i = 0; i < nums.length; i++) {
    pair.push([i, nums[i]])
  }
  pair = pair.sort((a,b) => a[1] - b[1])

  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (i === j) {
      j++
    }

    while (j < pair.length && pair[j][1] - pair[i][1] < target) {
      j++
    }

    if (pair[j][1] - pair[i][1] === target) {
      const firstIndex = Math.min(pair[j][0] + 1, pair[i][0] + 1)
      const secondIndex = Math.max(pair[j][0] + 1, pair[i][0] + 1)
      return [firstIndex, secondIndex]
    }
  }
  return []
}
