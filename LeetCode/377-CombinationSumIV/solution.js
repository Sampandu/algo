var combinationSum4 = function(nums, target) {
  if (nums === null || nums.length === 0 || target === null) return 0;

  nums.sort((a, b) => a - b);
  let counter = { value: 0 };
  const memo = [1];
  for (let i = 1; i <= target; i++) {
    counter.value = 0;
    dfs(i, nums, counter, memo);
    memo[i] = counter.value;
  }
  return memo[target];
};

function dfs(leftTarget, nums, counter, memo) {
  if (memo[leftTarget] !== undefined) {
    return (counter.value += memo[leftTarget]);
  }

  if (leftTarget === 0) {
    return counter.value++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > leftTarget) {
      break;
    }
    dfs(leftTarget - nums[i], nums, counter, memo);
  }
}
