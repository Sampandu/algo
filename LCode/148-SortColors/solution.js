//solution1, couting sort, time O(n), space O(n)
const sortColors = nums => {
  if (nums === null || nums.length === 0) {
    return
  }

  let zero = [],
      one = [],
      two = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero.push(nums[i])
    } else if (nums[i] === 1) {
      one.push(nums[i])
    } else {
      two.push(nums[i])
    }
  }

  return [...zero, ...one, ...two]
}

//solution2, three pointers, time O(n), space O(1)
const sortColors = nums => {
  if (nums === null || nums.length === 0) {
    return
  }

  let left = 0,
      right = nums.length -1,
      i
  while (i <= right) {
    if (nums[i] === 0) {
      swap(nums, i, left)
      left++
      i++
    } else if (nums[i] === 1) {
      i++
    } else {
      swap(nums, i, right)
      right--
    }
  }
  return nums
}

const swap = (nums, i, j) => {
  const temp = nums[j]
  nums[j] = nums[i]
  nums[i] = temp
}
