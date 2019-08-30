var setZeroes = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];

  let rowFlag = false;
  let colFlag = false;

  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && matrix[i][j] === 0) {
        rowFlag = true;
      }
      if (j === 0 && matrix[i][j] === 0) {
        colFlag = true;
      }
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (rowFlag) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (colFlag) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
