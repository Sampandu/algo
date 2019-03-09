//solution1: brute force, time complexity O(n^2)
const containsDuplicate = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (cur === nums[j]) {
        return true
      }
    }
  }
  return false
}

//solution2: sorting the array then check adjacent element is bigger or not. However, the time complexity of array.sort() is uncertain, it depends on the implementation of browser. Normally, time complexity is O(n.logn)
const containsDuplicate = nums => {
  const sorted = nums.sort((a, b) => a - b )
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i+1]) {
      return true
    }
  }
  return false
}

//solution3: make use of Set object, time complexity is O(1)
const containsDuplicate = nums => {
  const numsSet = new Set(nums)
  return numsSet.size === nums.length ? false : true
}
