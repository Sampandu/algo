/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k === null || n === null) return [];
  const results = [];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  dfs(nums, 0, [], results, k, n);
  return results;
};

function dfs(nums, index, arr, results, k, n) {
  if (n === 0 && arr.length === k) {
    return results.push([...arr]);
  }

  for (let i = index; i < nums.length; i++) {
    if (nums[i] > n) {
      return;
    }
    arr.push(nums[i]);
    dfs(nums, i + 1, arr, results, k, n - nums[i]);
    arr.pop();
  }
}
