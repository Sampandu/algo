const subarraySum = (nums, k) => {
  if (nums === null || nums.length === 0) return -1;

  let sum = 0;
  let count = 0;
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) {
      count += map[sum - k];
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  return count;
};
