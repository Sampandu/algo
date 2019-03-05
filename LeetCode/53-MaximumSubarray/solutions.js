//solution1: brute force, time complexity: O(n^2), space complexity: O(n)
const maxSubArray = function(nums) {
  let sumGroup = []
  for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      let j = i + 1
      while (j < nums.length) {
          sum += nums[j]
          sumGroup.push(sum)
          j++
      }
      if(i === nums.length) {
          sumGroup.push(sum)
      }
  }
  return Math.max(...sumGroup)
}

//solution2: optimize, time complexity: O(n^2), space complexity: O(1)
const maxSubArray = nums => {
  let sum = nums[0]
  let max = sum
  for (let i = 1; i < nums.length; i++) {
    sum = sum + nums[i] > nums[i] ? sum + nums[i] : nums[i]
    max = max > sum ? max : sum
  }
  return max
}
