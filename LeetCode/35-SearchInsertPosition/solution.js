var searchInsert = function(nums, target) {
  //assume there is not duplicated in the array
  if (nums === null || nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;
  let cloest = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    cloest = findCloestElement(nums, mid, cloest, target);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return nums[cloest] < target ? cloest + 1 : cloest;
};

function findCloestElement(nums, mid, cloest, target) {
  if (
    cloest === -1 ||
    Math.abs(nums[mid] - target) < Math.abs(nums[cloest] - target)
  ) {
    return mid;
  }
  return cloest;
}
