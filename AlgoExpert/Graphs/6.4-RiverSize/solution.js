function riverSizes(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return null;
  }

  const sizeOfRivers = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1) {
        measureSizeOfRiver(i, j, sizeOfRivers, matrix);
      }
    }
  }
  return sizeOfRivers.sort((a, b) => a - b);
}

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function measureSizeOfRiver(row, column, array, matrix) {
  const directionX = [1, 0, -1, 0];
  const directionY = [0, 1, 0, -1];
  let size = 1;

  const queue = [new Coordinate(row, column)];
  matrix[row][column] = 0; //noted
  while (queue.length) {
    const coor = queue.shift();
    for (let i = 0; i < 4; i++) {
      const adjacent = new Coordinate(
        coor.x + directionX[i],
        coor.y + directionY[i]
      );
      if (!inBound(adjacent, matrix)) {
        continue;
      }
      if (matrix[adjacent.x][adjacent.y]) {
        size++;
        queue.push(new Coordinate(adjacent.x, adjacent.y));
        matrix[adjacent.x][adjacent.y] = 0;
      }
    }
  }
  array.push(size);
}

function inBound(coor, matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  return coor.x >= 0 && coor.x < row && coor.y >= 0 && coor.y < column;
}
