var findPeakElement = function(nums) {
  if (nums === null || nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (
      mid > 0 &&
      mid < nums.length - 1 &&
      nums[mid - 1] < nums[mid] &&
      nums[mid] > nums[mid + 1]
    ) {
      return mid;
    } else if (nums[mid - 1] < nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return nums[left] > nums[right] ? left : right;
};
