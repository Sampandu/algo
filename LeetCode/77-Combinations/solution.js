var combine = function(n, k) {
  if (n === null || n === 0) return -1;

  const result = [];
  findCombine(1, n, [], k, result);
  return result;
};

function findCombine(startIdx, n, buffer, k, result) {
  if (buffer.length === k) {
    result.push([...buffer]);
    return;
  }

  for (let i = startIdx; i <= n; i++) {
    buffer.push(i);
    findCombine(i + 1, n, buffer, k, result);
    buffer.pop();
  }
}
