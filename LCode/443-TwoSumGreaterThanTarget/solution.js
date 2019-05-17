//solution, time O(nlogn), space O(1)
const twoSum2 = function (nums, target) {
  if (nums === null || nums.length <= 1 || target === null) {
      return 0
  }
  nums = nums.sort((a,b) => b - a)
  let count = 0,
      left = 0,
      right = nums.length - 1
  while (left < right) {
      if (nums[left] + nums[right] > target) {
          count += right - left
          left++
      } else {
          right--
      }
  }
  return count
}
