function maxSumSubarray(nums) {
  if (nums === null || nums.length === 0) return -1;

  let maxSum = nums[0];
  let maxSumEnding = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSumEnding = Math.max(nums[i], maxSumEnding + nums[i]);
    maxSum = Math.max(maxSum, maxSumEnding);
  }
  return maxSum;
}
