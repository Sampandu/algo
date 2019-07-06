//solution: DFS
var permuteUnique = function(nums) {
  const results = [];
  if (nums === null) return results;

  nums.sort();
  dfs(nums, [], [], results);
  return results;
};

function dfs(nums, visited, arr, results) {
  if (arr.length === nums.length) {
    results.push([...arr]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
      continue;
    }

    arr.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, arr, results);
    visited[i] = false;
    arr.pop();
  }
}
