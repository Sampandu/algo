//solution1, brute force, time O(n^2)
const twoSum5 = function (nums, target) {
    if (nums === null || nums.length <= 1 || target === null) {
        return 0
    }

    nums = nums.sort((a,b) => a - b)
    let count = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] <= target) {
                count++
            }
        }
    }
    return count
}

//solution2, time O(nlogn)
const twoSum5 = (nums, target) => {
  if (nums === null || nums.length <= 1 || target === null) {
      return 0
  }

  nums = nums.sort((a,b) => a - b)
  let count = 0,
      left = 0,
      right = nums.length - 1
  while (left < right) {
      if (nums[left] + nums[right] > target) {
          right--
      } else {
          count += right - left
          left++
      }
  }

  return count
}
