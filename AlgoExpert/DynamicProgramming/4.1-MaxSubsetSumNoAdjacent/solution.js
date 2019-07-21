//solution1, time O(n), space O(n)
function maxSubsetSumNoAdjacent(array) {
  if (array === null || array.length === 0) return 0;
  if (array.length === 1) return array[0];

  const maxSum = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
    maxSum.push(current);
  }
  return maxSum[maxSum.length - 1];
}

//solution2, time O(n), space O(1)
function maxSubsetSumNoAdjacent(array) {
  if (array === null || array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let first = Math.max(array[0], array[1]);
  let second = array[0];
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}
