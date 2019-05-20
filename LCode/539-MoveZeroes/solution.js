//solution1, move zero to the right === move non-zero numbers to the left
const moveZeroes = nums => {
  // write your code here
  if (nums === null || nums.length === 0) {
      return null
  }

  let left = 0,
      right = 0
  while (right < nums.length) {
      if (nums[right] !== 0) {
          const temp = nums[right]
          nums[right] = nums[left]
          nums[left] = temp
          left++
      }
      right++
  }
  return nums
}

//solution2, mininum writing to the array
const moveZeroes = nums => {
    if (nums === null || nums.length === 0) {
        return null
    }

    let left = 0,
        right = 0
    while (right < nums.length) {
        if (nums[right] !== 0) {
            nums[left] = nums[right]
            left++
        }
        right++
    }

    while (left < nums.length) {
        if (nums[left] !== 0) {
            nums[left] = 0
        }
        left++
    }
    return nums
}
