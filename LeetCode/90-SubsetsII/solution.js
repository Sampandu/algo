// solution1: DFS
var subsetsWithDup = function(nums) {
  const results = [];
  if (nums === null) return results;

  nums.sort();
  dfs(nums, 0, [], results);
  return results;
};

function dfs(nums, index, subset, results) {
  results.push(subset);

  for (let i = index; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1] && i > index) {
      continue;
    }
    subset.push(nums[i]);
    dfs(nums, i + 1, [...subset], results);
    subset.pop(); //backtracking
  }
}
