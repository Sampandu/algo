const findMin = function (nums) {
  if(nums.length === 0) return

  let start = 0,
      end = nums.length - 1
  while(start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      const leftDiff = Math.abs(nums[mid] - nums[start]),
            rightDiff = Math.abs(nums[mid] - nums[end])
      if(leftDiff >= rightDiff) {
          end = mid
      } else {
          start = mid
      }
  }

  if(nums[start] < nums[end]) return nums[start]
  else return nums[end]
}
