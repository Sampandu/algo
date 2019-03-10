//solution1: brute force, time complexity O(n^2)
const containsNearbyAlmostDuplicate = (nums, k, t) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && j - i <= k) return true
    }
  }
  return false
}

//solution2: optimize, use heap sort
