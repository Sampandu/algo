//solution, time O(n), space O(1)
const twoSum = function (nums, target) {
  if (nums === null || nums.length <= 1) {
      return []
  }

  if (target === null) {
      return []
  }

  let left = 0,
      right = nums.length - 1
  while (left < right) {
      if (nums[left] + nums[right] === target) {
          return [left + 1, right + 1]
      } else if (nums[left] + nums[right] < target) {
          left++
      } else {
          right--
      }
  }
  return []
}
