//solution, time O(nlogk)
const sortColors2 = (colors, k) => {
  if (colors === null || colors.length === 0) {
    return
  }

  quickSort(colors, 0, colors.length - 1, 1, k)
  return colors
}

const quickSort = (nums, start, end, colorFrom, colorTo) => {
  if (colorFrom === colorTo) {
    return
  }

  if (start >= end) {
    return
  }

  let left = start,
      right = end
  const colorMid = Math.floor((colorFrom + colorTo) / 2)
  while (left <= right) {
    while (left <= right && nums[left] <= colorMid) {
      left++
    }
    while (left <= right && nums[right] > colorMid) {
      right--
    }

    if (left <= right) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      right--
    }
  }

  quickSort(nums, start, right, colorFrom, colorMid)
  quickSort(nums, left, end, colorMid + 1, colorTo)
}
