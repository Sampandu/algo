var spiralOrder = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];

  let startRow = 0,
    endRow = matrix.length - 1;
  let startCol = 0,
    endCol = matrix[0].length - 1;
  const result = [];

  while (startRow <= endRow && startCol <= endCol) {
    //top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;

    //if matrix is square, the below line is unnecessary
    if (startRow > endRow) break;

    //right col
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;

    //if matrix is square, the below line is unnecessary
    if (endCol < startCol) break;

    //bottom row
    for (let i = endCol; i >= startCol; i--) {
      result.push(matrix[endRow][i]);
    }
    endRow--;

    //left col
    for (let i = endRow; i >= startRow; i--) {
      result.push(matrix[i][startCol]);
    }
    startCol++;
  }
  return result;
};
