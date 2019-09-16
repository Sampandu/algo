/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === null || n === 0) return [];

  // const res = new Array(n).fill(new Array(n))
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  let count = 1;

  let startRow = 0,
    endRow = n - 1;
  let startCol = 0,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //top row
    for (let i = startCol; i <= endCol; i++) {
      res[startRow][i] = count;
      count++;
    }
    startRow++;

    //right col
    for (let i = startRow; i <= endRow; i++) {
      res[i][endCol] = count;
      count++;
    }
    endCol--;

    //bottom row
    for (let i = endCol; i >= startCol; i--) {
      res[endRow][i] = count;
      count++;
    }
    endRow--;

    //left col
    for (let i = endRow; i >= startRow; i--) {
      res[i][startCol] = count;
      count++;
    }
    startCol++;
  }
  return res;
};
