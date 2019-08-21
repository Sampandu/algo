// time complexity: O(n), space complexity: O(1)
var findUnsortedSubarray = function(nums) {
  if (nums === null || nums.length === 0) return -1;

  let i, j;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) break;
  }
  for (j = nums.length - 1; j >= 0; j--) {
    if (nums[j - 1] > nums[j]) break;
  }

  if (i >= nums.length || j <= 0) return 0;

  let max = nums[i],
    min = nums[i];
  for (let k = i; k <= j; k++) {
    if (nums[k] > max) max = nums[k];
    if (nums[k] < min) min = nums[k];
  }

  while (i > 0 && nums[i - 1] > min) {
    i--;
  }
  while (j < nums.length - 1 && nums[j + 1] < max) {
    j++;
  }

  return j - i + 1;
};
