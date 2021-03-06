//solution1: recursion
const binarySearch = function (nums, target) {
  // write your code here
  if(nums.length === 0) return -1

  return bsRecursion(nums, 0, nums.length - 1, target)
}

const bsRecursion = (nums, start, end, target) => {
  if(start > end) return -1

  const mid = start + Math.floor((end - start) / 2)
  if(nums[mid] === target) {
      if(nums[mid - 1] !== target) return mid
      else return bsRecursion(nums, start, mid - 1, target)
  }
  if(nums[mid] < target) return bsRecursion(nums, mid + 1, end, target)
  else return bsRecursion(nums, start, mid - 1, target)
}

//solution2: non-recursion
const binarySearch = (nums, target) => {
  if (nums === null || nums.length === 0) {
      return -1
  }

  let start = 0,
      end = nums.length - 1

  while (start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      if (nums[mid] === target) {
        end = mid
      } else if (nums[mid] < target) {
          start = mid
      } else {
          end = mid
      }
  }

  if (nums[start] === target) {
      return start
  }
  if (nums[end] === target) {
      return end
  }
  return -1
}
