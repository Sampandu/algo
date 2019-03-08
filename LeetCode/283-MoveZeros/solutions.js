// solution1, brute force, check if current num is 0 and swap with adjacent num if it is 0, the tricky case is [0,0,1], time complexity is O(n^3)
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] === 0) {
            let k = j
            for (let l = j+1; l < nums.length; l++) {
              if(nums[l] !== 0) {
                const temp = nums[l]
                nums[l] = nums[k]
                nums[k] = temp
              }
              k++
            }
        }
    }
  }

  return nums
};