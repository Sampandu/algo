/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  if (n === null) return

  const nums = n.toString().split('').map(e => Number(e))
  for (let i = nums.length - 2; i >= 0; i--) {
      for (let j = nums.length - 1; j > i; j--) {
          if (nums[j] <= nums[i]) {
              continue
          }
          [nums[i], nums[j]] = [nums[j], nums[i]]
          const sortedNums = swap(nums, i + 1, nums.length - 1)
          const result = Number(sortedNums.join(''))
          return result < 2147483648 ? result : -1
      }
  }
  return -1
};

function swap(nums, s, e) {
  while (s < e) {
      [nums[s], nums[e]] = [nums[e], nums[s]]
      s++
      e--
  }
  return nums
}