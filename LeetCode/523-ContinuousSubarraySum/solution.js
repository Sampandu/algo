var checkSubarraySum = (nums, k) => {
  if (nums === null || nums.length === 0) return -1;

  if (k === 0) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== 0) continue;
      else if (nums[i + 1] === 0) {
        return true;
      }
    }
    return false;
  }

  let sum = 0;
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum % k in map && i - map[sum % k] > 1) {
      return true;
    }
    if (!(sum % k in map)) map[sum % k] = i;
  }
  return false;
};
