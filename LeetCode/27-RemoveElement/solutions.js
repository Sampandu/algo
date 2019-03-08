// solution, time complexity O(n), space complexity O(1)

var removeElement = function(nums, val) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[index] = nums[i]
          nums[i] = index === i ? nums[i] : val
          index++
      }
  }
  nums.splice(index)   //Array.splice() is in place, it returns an array of the removed element
  return nums.length
};
