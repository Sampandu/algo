var findDiagonalOrder = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];

  let x = 0,
    y = 0;
  let dx = -1,
    dy = 1;
  let m = matrix.length,
    n = matrix[0].length;
  let count = 1;
  let z = [];
  z[0] = matrix[0][0];
  while (count < m * n) {
    if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n) {
      x += dx;
      y += dy;
    } else {
      if (dx === -1 && dy === 1) {
        if (y + 1 < n) {
          y++;
        } else {
          x++;
        }
        dx = 1;
        dy = -1;
      } else {
        if (x + 1 < m) {
          x++;
        } else {
          y++;
        }
        dx = -1;
        dy = 1;
      }
    }
    z[count] = matrix[x][y];
    count++;
  }
  return z;
};
