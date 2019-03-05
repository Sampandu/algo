//solution1: brute force, time complexity: O(n^2), space complexity: O(1)
const twoSum = (nums, target) => {
  if (nums.length === 0) {
    return false
  }

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++ ) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
  return false;
}

//solution2: Because one element can't be used twice, so we could use Set to check if the difference between target and one element exists in the nums.
const twoSum = (nums, target) => {
  if (nums.length === 0) {
    return false
  }
  const numsSet = new Set(nums)
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (numsSet.has(diff) && nums.indexOf(diff) !== i) {
      // case: nums = [3, 5,7], target = 6, if we don't check nums.indexOf(diff) !== i, it might return [0, 0]
      return [i, nums.indexOf(diff)]
    }
  }

  return false
}
