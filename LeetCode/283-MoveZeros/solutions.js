// solution1, brute force, check if current num is 0 and swap with adjacent num if it is 0, the tricky case is [0,0,1], time complexity: O(n^3)
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === 0) {
        let k = j;
        for (let l = j + 1; l < nums.length; l++) {
          if (nums[l] !== 0) {
            const temp = nums[l];
            nums[l] = nums[k];
            nums[k] = temp;
          }
          k++;
        }
      }
    }
  }

  return nums;
};

//solution2, time complexity: O()
const moveZeroes = nums => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      nums[i] = index === i ? nums[i] : 0;
      index++;
    }
  }
  return nums;
};

//solution3
//move zeros to the right
const moveZeroes = nums => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }
  while (count < nums.length) {
    nums[count++] = 0;
  }
};
//move zeros to the left
const moveZeroes = nums => {
  let count = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      nums[count--] = nums[i];
    }
  }

  while (count >= 0) {
    nums[count--] = 0;
  }
};

//solution4, note: this method doesn't guarantee the non-zero numbers in the left-side area is sorted.
const moveZeroes = nums => {
  let low = -1,
    high = nums.length;
  while (low + 1 < high) {
    if (nums[low + 1] !== 0) {
      low++;
    } else {
      [nums[low + 1], nums[high - 1]] = [nums[high - 1], nums[low + 1]];
      high--;
    }
  }
};
