const search = function (A, target) {
  if (A === null || A.length === 0 || target === null) {
      return -1
  }

  let start = 0,
      end = A.length - 1,
      div = A[A.length - 1]

  while(start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      if (A[mid] === target) {
          return mid
      }
      if (A[start] < A[mid]) {
          if (A[start] <= target && target < A[mid]) {
              end = mid
          } else {
              start = mid
          }
      } else {
          if (A[mid] < target && target <= A[end]) {
              start = mid
          } else {
              end = mid
          }
      }
  }

  if (A[start] === target) {
      return start
  }
  if (A[end] === target) {
      return end
  }
  return -1
}
