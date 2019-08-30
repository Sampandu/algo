var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return false;

  const n = matrix.length - 1;
  const m = matrix[0].length - 1;
  let x = n;
  let y = 0;

  while (x >= 0 && y <= m) {
    if (matrix[x][y] < target) {
      y++;
    } else if (matrix[x][y] > target) {
      x--;
    } else {
      return true;
    }
  }
  return false;
};
