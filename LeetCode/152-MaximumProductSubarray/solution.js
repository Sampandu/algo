//solution, DP
var maxProduct = function(nums) {
  if (nums === null || nums.length === 0) return;

  let maxProd = nums[0],
    minProd = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxProd *= nums[i];
    minProd *= nums[i];

    //if nums[i] is negative, swap the maxProd and the minProd
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(maxProd, nums[i]);
    minProd = Math.min(minProd, nums[i]);
    res = Math.max(maxProd, res);
  }

  return res;
};

//solution
var maxProduct = function(nums) {
  if (nums === null || nums.length === 0) return;

  let maxProd = nums[0],
    minProd = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevMaxProd = maxProd;
    maxProd = Math.max(prevMaxProd * nums[i], nums[i], minProd * nums[i]);
    minProd = Math.min(prevMaxProd * nums[i], nums[i], minProd * nums[i]);
    res = Math.max(maxProd, res);
  }

  return res;
};
