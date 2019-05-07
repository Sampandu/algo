//the elements in the array may be duplicated, it is hard to locate the pivot point by using binary search, for example, [1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const recoverRotatedSortedArray = (nums) => {
  if (nums === null || nums.length === 0) {
    return -1
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
      reverse(nums, 0, i)
      reverse(nums, i + 1, nums.length - 1)
      reverse(nums, 0, nums.length - 1)
      return nums
    }
  }
}

const reverse = (nums, start, end) => {
  for (let i = start, j = end; i < j; i++, j--) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}
