const combinationSum = (candidates, target) => {
  const results = [];
  if (candidates === null || candidates.length === 0 || target === null)
    return results;

  candidates.sort((a, b) => a - b);
  dfs(candidates, 0, [], results, target);
  return results;
};

function dfs(nums, index, arr, results, target) {
  if (target === 0) {
    results.push([...arr]);
    return;
  }

  for (let i = index; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    if (nums[i] > target) return;

    arr.push(nums[i]);
    dfs(nums, i, arr, results, target - nums[i]);
    arr.pop();
  }
}
