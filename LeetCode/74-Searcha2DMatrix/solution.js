/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const row = matrix.length;
  const col = matrix[0].length;

  let start = 0;
  let end = row * col - 1;
  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (matrix[Math.floor(mid / col)][mid % col] === target) return true;
    if (matrix[Math.floor(mid / col)][mid % col] < target) start = mid;
    if (matrix[Math.floor(mid / col)][mid % col] > target) end = mid;
  }

  if (
    matrix[Math.floor(start / col)][start % col] === target ||
    matrix[Math.floor(end / col)][end % col] === target
  ) {
    return true;
  }

  return false;
};
