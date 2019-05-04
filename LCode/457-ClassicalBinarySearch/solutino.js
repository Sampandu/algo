const findPosition = (nums, target) => {
  if (nums === null || nums.length === 0) {
    return -1
  }

  return binarySearch(nums, target)
}

const binarySearch = (nums, target) => {
  let left = 0,
      right = nums.length - 1

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }

  if (nums[left] === target) {
    return left
  }
  if (nums[right] === target) {
    return right
  }
  return -1
}
