//solution1: DFS
var subsets = function(nums) {
  const results = [];
  if (nums === null) return results;

  dfs(nums, 0, [], results);
  return results;
};

function dfs(nums, index, arr, results) {
  results.push(arr);

  for (let i = index; i < nums.length; i++) {
    arr.push(nums[i]);
    dfs(nums, i + 1, [...arr], results);
    arr.pop();
  }
}

//solution2: DFS
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
