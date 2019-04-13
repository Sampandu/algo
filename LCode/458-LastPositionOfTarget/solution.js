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
