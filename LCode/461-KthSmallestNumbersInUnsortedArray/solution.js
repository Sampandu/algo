const kthSmallest = function (k, nums) {
  // write your code here
  if (nums === null || nums.length === 0) {
      return null
  }

  return quickSelect(nums, 0, nums.length - 1, k)
}

const quickSelect = (nums, start, end, k) => {
  if (start >= end) {
      return nums[start]
  }

  let left = start,
      right = end
  const pivot = nums[start + Math.floor((end - start) / 2)]
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

  if (start + k - 1 <= right) {
    return quickSelect(nums, start, right, k)
  }
  if (start + k - 1 >= left) {
    return quickSelect(nums, left, end, k - (left - start))
  }
  return nums[right + 1]
}
