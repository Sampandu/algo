/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(a) {
  if (a === null || a.length === 0) {
    return 0;
  }

  a = a.sort((a, b) => a - b);
  while (a.length > 1) {
    const larger = a.pop();
    const small = a.pop();
    if (larger === small) {
      continue;
    } else if (larger > small) {
      const diff = larger - small;
      a.push(diff);
      a = a.sort((a, b) => a - b);  //it takes O(nlgn)
    }
  }
  return a.length === 0 ? 0 : a[0];
};

//solution2, using heap to store the weights, and it takes O(logn) time to sort it every time we take a turn