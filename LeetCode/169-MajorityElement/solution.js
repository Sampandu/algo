var majorityElement = function(nums) {
  if (nums === null || nums.length === 0) return null;

  let candidate = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (candidate === nums[i]) {
      count++;
    } else if (count > 0) {
      count--;
    } else {
      candidate = nums[i];
      count = 1;
    }
  }

  return candidate;
};
