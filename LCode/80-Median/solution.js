//solution, time O(n)
const median = (nums) => {
  if (nums === null || nums.length === 0) {
    return
  }

  return quickSelect(nums, 0, nums.length - 1, Math.floor((nums.length - 1) / 2))
}

const quickSelect = (nums, start, end, k) => {
  if (start >= end) {
    return nums[start]
  }

  let left = start,
      right = end
  const pivot = nums[Math.floor((start + end) / 2)]
  while (left <= right) {
    while (left <= right && nums[left] < pivot) {
      left++
    }

    while (left <= right && nums[right] > pivot) {
      right--
    }

    if (left <= right) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      right--
    }
  }

  if (start + k <= right) {
    return quickSelect(nums, start, right, k)
  }
  if (start + k >= left) {
    return quickSelect(nums, left, end, k - (left - start))
  }

  return nums[right + 1]
}
