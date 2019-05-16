const threeSum = numbers => {
  if (numbers === null || numbers.length === 0) {
    return []
  }

  numbers = numbers.sort((a,b) => a - b)

  const results = []
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue
    }

    const target = -numbers[i]
    twoSum(numbers, i + 1, numbers.length - 1, target, results)
  }
  return results
}

const twoSum = (nums, start, end, target, results) => {
  let left = start,
      right = end
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      results.push([-target, nums[left], nums[right]])
      left++
      right--
      while (left < right && nums[left] === nums[left - 1]) {
        left++
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--
      }
    } else if (nums[left] + nums[right] < target) {
      left++
    } else {
      right--
    }
  }
}
