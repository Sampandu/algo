//solution1: recursion
const lastPosition = function (nums, target) {
  // write your code here
  if(nums.length === 0) return -1

  return binarySearch(nums, 0, nums.length - 1, target)
}

const binarySearch = (nums, start, end, target) => {
  if(start > end) return -1

  const mid = start + Math.floor((end - start) / 2)
  if(nums[mid] === target) {
      if(nums[mid + 1] !== target) return mid
      else return binarySearch(nums, mid + 1, end, target)
  }
  if(nums[mid] < target) return binarySearch(nums, mid + 1, end, target)
  else return binarySearch(nums, start, mid - 1, target)
}

//solution2: non-recursion
const lastPosition = (nums, target) => {
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
          left = mid
      } else if (nums[mid] < target) {
          left = mid
      } else {
          right = mid
      }
  }

  if (nums[right] === target) {
      return right
  }
  if (nums[left] === target) {
      return left
  }
  return -1
}
