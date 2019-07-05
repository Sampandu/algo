//solution1: DFS
var subsets = function(nums) {
  const results = [];
  if (nums === null) return results;

  nums = nums.sort();
  dfs(nums, 0, [], results);
  return results;
};

function dfs(nums, index, subset, results) {
  if (index === nums.length) {
    results.push(subset);
    return;
  }

  subset.push(nums[index]);
  dfs(nums, index + 1, [...subset], results);

  subset.pop();
  dfs(nums, index + 1, [...subset], results);
}
