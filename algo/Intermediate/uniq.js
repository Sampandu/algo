// uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

// uniq([])                              // []
// uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

//solution1
const uniq = arr => {
  if (arr === null) {
    return;
  }

  const seen = {};
  return arr.reduce((result, n) => {
    if (n in seen) {
      return result;
    }
    seen[n] = true;
    return [...result, n];
  }, []);
};

//solution2, time O(nlogn)
const uniq = arr => {
  if (arr === null) {
    return;
  }

  arr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
