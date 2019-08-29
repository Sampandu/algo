var findNumberOfLIS = function(nums) {
  if (nums === null || nums.length === 0) return 0;

  const lis = new Array(nums.length).fill(1);
  const count = new Array(nums.length).fill(1);
  let max;
  let counter = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
        count[i] = count[j];
      } else if (nums[i] > nums[j] && lis[i] === lis[j] + 1) {
        count[i] += count[j];
      }
    }
  }

  for (let i = 0; i < lis.length; i++) {
    if (max === undefined || lis[i] > max) {
      max = lis[i];
      counter = count[i];
    } else if (lis[i] === max) {
      counter += count[i];
    }
  }

  return counter;
};
