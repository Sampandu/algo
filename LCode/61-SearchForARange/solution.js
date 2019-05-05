const searchRange = function (A, target) {
  if (A === null || A.length === 0) {
      return [-1, -1]
  }

  if (A.length === 1 && target === A[0]) {
      return [0,0]
  }

  let start = 0,
      end = A.length - 1,
      result = [-1, -1]
  while (start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      if (A[mid] === target) {
        end = mid
      } else if (A[mid] < target) {
          start = mid
      } else {
          end = mid
      }
  }

  if (A[start] === target) {
      result[0] = start
  } else if (A[end] === target) {
      result[0] = end
  } else {
    return result
  }


  start = 0
  end = A.length - 1
  while (start + 1 < end) {
      mid = start + Math.floor((end - start) / 2)
      if (A[mid] === target) {
        start = mid
      } else if (A[mid] < target) {
          start = mid
      } else {
          end = mid
      }
  }

  if (A[end] === target) {
      result[1] = end
  } else if (A[start] === target) {
      result[1] = start
  }

  return result
}
