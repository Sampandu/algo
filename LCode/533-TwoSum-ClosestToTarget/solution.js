const twoSumClosest = function (nums, target) {
  if (nums === null || nums.length <= 1) {
      return null
  }

  nums = nums.sort((a,b) => a - b)

  let left = 0,
      right = nums.length - 1,
      // sum = nums[left] + nums[right]
      diff = Math.abs(target - nums[left] - nums[right])
  while (left < right) {
      // const subSum = nums[left] + nums[right]
      // if (Math.abs(target - sum) > Math.abs(target - subSum)) {
      //     sum = nums[left] + nums[right]
      // }

      // if (subSum > target) {
      //     right--
      // } else {
      //     left++
      // }

      if (nums[left] + nums[right] > target) {
        diff = Math.min(diff, Math.abs(target - nums[left] - nums[right]))
        right--
      } else {
        diff = Math.min(diff, Math.abs(target - nums[left] - nums[right]))
        left++
      }
  }
  // return Math.abs(target - sum)
  return diff
}
