var findNumberOfLIS = function(nums) {
  if (nums === null || nums.length === 0) return 0;

  const len = new Array(nums.length).fill(1);
  const count = new Array(nums.length).fill(1);
  let max;
  let counter = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && len[i] < len[j] + 1) {
        len[i] = len[j] + 1;
        count[i] = count[j];
      } else if (nums[i] > nums[j] && len[i] === len[j] + 1) {
        count[i] += count[j];
      }
    }
  }

  for (let i = 0; i < len.length; i++) {
    if (max === undefined || len[i] > max) {
      max = len[i];
      counter = count[i];
    } else if (len[i] === max) {
      counter += count[i];
    }
  }

  return counter;
};
