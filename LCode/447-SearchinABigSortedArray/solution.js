const searchBigSortedArray = (nums, target) => {
  if (nums === null || nums.length === 0) {
    return -1
  }

  //Exponential Backoff
  idx = 0
  while (nums[idx] <= target) {
    idx = idx * 2 + 1   //
  }

  let start = 0,
      end = idx
  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      end = mid
    } else if (nums[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  if (nums[start] === target) {
    return start
  }
  if (nums[end] === target) {
    return end
  }

  return -1
}
