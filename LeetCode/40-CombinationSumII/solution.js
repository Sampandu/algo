/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates === null || candidates.length === 0 || target === null) {
    return [];
  }

  const results = [];
  candidates.sort((a, b) => a - b);
  dfs(candidates, 0, [], results, target);
  return results;
};

function dfs(nums, startIndex, arr, results, target) {
  if (target === 0) {
    return results.push([...arr]);
  }

  for (let i = startIndex; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1] && i !== startIndex) {
      continue;
    }

    if (nums[i] > target) {
      return;
    }

    arr.push(nums[i]);
    dfs(nums, i + 1, arr, results, target - nums[i]);
    arr.pop();
  }
}
