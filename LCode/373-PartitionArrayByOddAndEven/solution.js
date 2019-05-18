const partitionArray = (nums) => {
  if (nums === null || nums.length === 0) {
      return null
  }

  let left = 0,
      right = nums.length - 1
  while (left <= right) {
      while (left <= right && nums[left] % 2 === 1) {
          left++
      }

      while (left <= right && nums[right] % 2 === 0) {
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
  return nums
}
