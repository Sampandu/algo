// solution1, time O(n), space O(n)
const deduplication = nums => {
  if (nums === null || nums.length === 0) {
      return null
  }

  if (nums.length === 1) {
      return nums
  }

  const map = {}
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
          continue
      } else {
          map[nums[i]] = true
      }
  }
  return Object.keys(map).length
}

//solution2, time O(nlogn), space O(1)
const deduplication = nums => {
  if (nums === null || nums.length === 0) {
    return null
  }

  if (nums.length === 1) {
    return nums
  }

  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[len] !== nums[i]) {
      len++
      nums[len] = nums[i]
    }
  }
  return len + 1
}

//solution3, time O(nlogn), space O(1)
const deduplication = nums => {
  const set = new Set(nums)
  return set.size
}
