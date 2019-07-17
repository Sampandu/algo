//solution, BFS
class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const numIslands = grid => {
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const row = grid.length,
    col = grid[0].length;
  let isLands = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        markByBFS(grid, i, j);
        isLands++;
      }
    }
  }
  return isLands;
};

function markByBFS(grid, x, y) {
  const directionX = [0, 1, -1, 0],
    directionY = [1, 0, 0, -1];

  queue = [new Coordinate(x, y)];
  grid[x][y] = false;
  while (queue.length) {
    const coor = queue.shift();
    for (let i = 0; i < 4; i++) {
      const adjacent = new Coordinate(
        coor.x + directionX[i],
        coor.y + directionY[i]
      );
      if (!inBound(adjacent, grid)) {
        continue;
      }
      if (grid[adjacent.x][adjacent.y]) {
        grid[adjacent.x][adjacent.y] = false;
        queue.push(adjacent);
      }
    }
  }
}

function inBound(coor, grid) {
  const row = grid.length,
    col = grid[0].length;
  return coor.x >= 0 && coor.x < row && coor.y >= 0 && coor.y < col;
}

//solution DFS
var numIslands = grid => {
  if (grid === null) return null;

  if (grid.length === 0 || grid[0].length === 0) return 0;

  let number = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        // 1 and 0 are strings rather than numbers
        number++;
        grid[row][col] = '0';
        markByDFS(grid, row, col);
      }
    }
  }

  return number;
};

function markByDFS(grid, x, y) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < 4; i++) {
    const djX = x + dx[i];
    const djY = y + dy[i];

    if (!inBound(grid, djX, djY)) {
      continue;
    }

    if (grid[djX][djY] === '0') {
      continue;
    } else {
      grid[djX][djY] = '0';
      markByDFS(grid, djX, djY);
    }
  }
}

function inBound(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}
