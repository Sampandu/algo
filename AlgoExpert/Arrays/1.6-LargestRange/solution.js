function largestRange(array) {
  if (array === null) return null;

  const visited = {};
  for (const num of array) {
    visited[num] = false;
  }

  let longestLength = 0;
  let bestRange = [];
  for (let num of array) {
    if (!visited[num]) {
      let currentLength = 1;
      visited[num] = true;
      let left = num - 1;
      while (left in visited) {
        currentLength++;
        visited[left] = true;
        left--;
      }
      let right = num + 1;
      while (right in visited) {
        currentLength++;
        visited[right] = true;
        right++;
      }
      if (currentLength > longestLength) {
        longestLength = currentLength;
        bestRange = [left + 1, right - 1];
      }
    }
  }
  return bestRange;
}
