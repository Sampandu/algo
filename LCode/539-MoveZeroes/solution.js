//solution, move zero to the right === move non-zero numbers to the left
const moveZeroes = nums => {
  // write your code here
  if (nums === null || nums.length === 0) {
      return null
  }

  let j = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          continue
      }

      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
  }
  return nums
}
