//this solution is built upon the solution of LeetCode 31
var getPermutation = function(n, k) {
  if (n === 0 || k < 0) return;
  if (n <= 1) return '1';

  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  let count = 1;
  while (count < k) {
    getNextPermutation(nums);
    count++;
  }

  return nums.join('');
};

function getNextPermutation(nums) {
  let i = nums.length - 1;
  while (i > 0 && nums[i] < nums[i - 1]) {
    i--;
  }
  if (i !== 0) {
    let j = nums.length - 1;
    while (nums[j] < nums[i - 1]) {
      j--;
    }
    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  }
  swapList(nums, i, nums.length - 1);
}

function swapList(nums, i, j) {
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}
