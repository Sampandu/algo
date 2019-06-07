// intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

// intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
// intersection([1, 5, 4, 2], [7, 12])             // []

//solution1
const intersection = (arr1, arr2) => {
  if (arr1 === null || arr2 === null) {
    return [];
  }

  const map = {},
    result = [];
  arr1.forEach(n => (map[n] = true));

  arr2.forEach(n => {
    if (n in map) {
      result.push(n);
    }
  });

  return result;
};

//solution2, the same theory, use 'reduce' method
const intersection = (arr1, arr2) => {
  if (arr1 === null || arr2 === null) {
    return [];
  }

  const seen = arr1.reduce((seen, n) => {
    seen[n] = true;
    return seen;
  }, {});

  return arr2.reduce((result, n) => {
    if (n in seen) {
      return [...result, n];
    }
    return result;
  }, []);
};
