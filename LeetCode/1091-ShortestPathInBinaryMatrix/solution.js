/**
 * @param {number[][]} grid
 * @return {number}
 */
class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var shortestPathBinaryMatrix = function(grid) {
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return -1;
  }

  if (grid[0][0] === 1) {
    return -1;
  }

  //be aware of the shift
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  const root = new Coordinate(0, 0);
  const queue = [root];
  grid[0][0] = 1;
  let step = 1;
  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const coor = queue.shift();

      if (coor.x === grid.length - 1 && coor.y === grid[0].length - 1) {
        return step;
      }

      for (let j = 0; j < 8; j++) {
        const adx = coor.x + dx[j];
        const ady = coor.y + dy[j];

        if (!inbound(grid, adx, ady) || grid[adx][ady] === 1) {
          continue;
        }

        queue.push(new Coordinate(adx, ady));
        grid[adx][ady] = 1;
      }
    }
    step++;
  }
  return -1;
};

function inbound(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}
