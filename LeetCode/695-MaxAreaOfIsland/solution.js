/**
 * @param {number[][]} grid
 * @return {number}
 */
//solution: BFS in matrix
var maxAreaOfIsland = function(grid) {
  if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;

  const row = grid.length;
  const col = grid[0].length;
  let max = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        const area = { value: 1 };
        bfs(grid, i, j, area);
        if (area.value > max) {
          max = area.value;
        }
      }
    }
  }
  return max;
};

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function bfs(grid, x, y, area) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const queue = [new Coordinate(x, y)];
  grid[x][y] = 0;
  while (queue.length) {
    const coor = queue.shift();
    for (let i = 0; i < 4; i++) {
      const adjacent = new Coordinate(coor.x + dx[i], coor.y + dy[i]);
      if (!inbound(grid, adjacent.x, adjacent.y)) {
        continue;
      }
      if (grid[adjacent.x][adjacent.y]) {
        area.value++;
        queue.push(adjacent);
        grid[adjacent.x][adjacent.y] = 0;
      }
    }
  }
}

function inbound(grid, x, y) {
  const row = grid.length,
    col = grid[0].length;
  return x >= 0 && x < row && y >= 0 && y < col;
}
