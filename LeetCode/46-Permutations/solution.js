var permute = function(nums) {
  const results = [];
  if (nums === null) return results;

  dfs(nums, [], [], results);
  return results;
};

function dfs(nums, visited, arr, results) {
  if (arr.length === nums.length) {
    results.push([...arr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    arr.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, arr, results);
    visited[i] = false;
    arr.pop();
  }
}
