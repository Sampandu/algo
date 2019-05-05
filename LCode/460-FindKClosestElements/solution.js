//solution, time complexity O(logn + k)
//assume non-repeative integer
const kClosestNumbers = (A, target, k) => {
  if (A === null || A.length === 0) {
    return -1
  }

  const firstIndex = findTargetPosition(A, target)
  let left = firstIndex - 1,
      right = firstIndex,
      result = []
  for (let i = 0; i < k; i++) {
    if (left < 0) {
      result.push(A[right++])
    } else if (right >= A.length) {
      result.push(A[left--])
    } else {
      if (target - A[left] <= A[right] - target) {
        result.push(A[left--])
      } else {
        result.push(A[right++])
      }
    }
  }
  return result
}

const findTargetPosition = (arr, target) => {
  let start = 0,
      end = arr.length - 1

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  return Math.abs(start-target) <= Math.abs(end-target) ? start : end
}
