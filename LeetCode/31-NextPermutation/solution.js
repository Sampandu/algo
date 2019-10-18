var nextPermutation = function(nums) {
  if (nums === null) return null;
  if (nums.length <= 1) return nums;

  let i = nums.length - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }

  if (i !== 0) {
    let j = nums.length - 1;
    while (j > 0 && nums[j] <= nums[i - 1]) {
      j--;
    }
    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  }

  swapList(nums, i, nums.length - 1);
  return nums;
};

function swapList(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
