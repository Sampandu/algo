//solution 1
const winSum = (numbers, k) => {
  const results = []

  if (numbers === null || numbers.length === 0 || !k) {
    return results
  }

  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]

    if (i < k - 1) {
      continue
    }

    if (i >= k) {
      sum -= numbers[i - k]
    }
    results.push(sum)
  }
  return results
}

//solution2
const winSum = (numbers, k) => {
  const results = []
  if (nums === null || nums.length === 0 || !k) {
      return results
  }

  let sum = 0
  for (let i = 0; i < k; i++) {
      sum += nums[i]
  }
  results.push(sum)

  for (let i = k; i < nums.length; i++) {
      sum += nums[i] - nums[i - k]
      results.push(sum)
  }

  return results
}
