// solution, time O(logn)
const findPeak = (A) => {
  if (A === null || A.length === 0) {
    return -1
  }

  let start = 0,
      end = A.length - 1
  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (A[mid - 1] > A[mid]) {
      end = mid
    } else if (A[mid + 1] > A[mid]) {
      start = mid
    } else {
      end = mid
    }
  }

  if (A[start] < A[end]) {
    return end
  } else {
    return start
  }
}
