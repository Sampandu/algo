var findDiagonalOrder = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];

  let row = 0,
    col = 0;
  let dRow = -1,
    dCol = 1; // There are two types of shiftment. dRow = -1, dCol = 1 and dRow = 1, dCol = -1
  let m = matrix.length,
    n = matrix[0].length;
  let count = 1;
  let z = [];
  z[0] = matrix[0][0];
  while (count < m * n) {
    if (
      row + dRow >= 0 &&
      row + dRow < m &&
      col + dCol >= 0 &&
      col + dCol < n
    ) {
      row += dRow;
      col += dCol;
    } else {
      if (dRow === -1 && dCol === 1) {
        if (col + 1 < n) {
          col++;
        } else {
          row++;
        }
        dRow = 1;
        dCol = -1;
      } else {
        if (row + 1 < m) {
          row++;
        } else {
          col++;
        }
        dRow = -1;
        dCol = 1;
      }
    }
    z[count] = matrix[row][col];
    count++;
  }
  return z;
};
