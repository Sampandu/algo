// includes - Return true or false indicating whether the given number appears in the given sorted array. Can you do it in O(log(N)) time?

// includes([1, 3, 8, 10], 8)            // true
// includes([1, 3, 8, 8, 15], 15)        // true
// includes([1, 3, 8, 10, 15], 9)        // false

//solution1: binary search
const includes = (arr, target) => {
  if (arr === null || arr.length === 0) {
    return false;
  }

  let start = 0,
    end = arr.length - 1;
  while (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (arr[start] === target) {
    return true;
  }
  if (arr[end] === target) {
    return true;
  }
  return false;
};
