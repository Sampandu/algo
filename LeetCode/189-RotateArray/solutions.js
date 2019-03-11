//solution1， time complexity O(k)
const rotate = (nums, k) => {
  if (nums.length <= 1 || k === 0) {
    return nums
  }

  for (let i = 1; i <= k; i++) {
      const ele = nums.pop()
      nums.unshift(ele)
  }
  return nums
};

//solution2
const rotate = (nums, k) => {
  const steps = k % nums.length
  const rotatedItems = nums.splice(nums.length - steps)
  return [...rotatedItems, ...nums]
}

//solution3 with space complexity O(1), time complexity O(n*k)
const rotate = (nums, k) => {
  const len = nums.length
  let temp = nums[nums.length - 1]
  for (let i = 0; i < k; i++) {
      for (let j = len - 1; j > 0; j--) {
          temp = nums[j-1]
          nums[j-1] = nums[j]
          nums[j] = temp
      }
  }
  return nums
}

//solution4,reverse, time complexity O(n), space complexity O(1)
const rotate = (nums, k) => {
  k = k % nums.length

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length - 1)

}

function reverse (array, start, end) {
  while(start < end) {
      const temp = array[start]
      array[start] = array[end]
      array[end] = temp
      start++
      end--
  }
  return array
}
