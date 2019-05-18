const partitionArray = (nums, k) => {
  if (nums === null || nums.length === 0 || k === null) {
      return 0
  }

  let left = 0,
      right = nums.length - 1
  while (left <= right) {
      while (left <= right && nums[left] < k) {
          left++
      }
      while (left <= right && nums[right] >= k) {
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
  return right + 1
}
