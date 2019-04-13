const mountainSequence = function (nums) {
  if (nums.length === 0) return

  if (nums.length === 1) return nums[0]

  let start = 0, end = nums.length - 1
  while(start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      if(nums[mid - 1] <= nums[mid]){
          start = mid
      } else {
          end = mid
      }
  }

  return Math.max(nums[start], nums[end])
}
