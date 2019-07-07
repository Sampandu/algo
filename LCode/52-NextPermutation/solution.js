//solution, the replacement is in-place
const nextPermutation = function(nums) {
  if (nums === null) return;
  if (nums.length <= 1) return nums;

  let i = nums.length - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }
  if (i !== 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i - 1]) {
      j--;
    }
    swapItem(nums, i - 1, j);
  }
  swapList(nums, i, nums.length - 1);
  return nums;
};

function swapItem(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function swapList(nums, i, j) {
  while (i < j) {
    swapItem(nums, i, j);
    i++;
    j--;
  }
}
