const hasPath = function(maze, start) {
  if (maze === null || maze.length === 0) return -1;

  const visited = {};
  return findPath(maze, start[0], start[1], visited);
};

function findPath(maze, x, y, visited) {
  const pair = x.toString() + y.toString();
  if (!inBound(maze, x, y) || maze[x][y] === 1 || visited[pair]) {
    return false;
  }

  if (x === maze.length - 1 && y === maze[0].length - 1) {
    return true;
  }

  visited[pair] = true;

  const adjX = [1, 0, -1, 0];
  const adjY = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const neighborX = x + adjX[i];
    const neighborY = y + adjY[i];
    if (findPath(maze, neighborX, neighborY, visited)) {
      return true;
    }
  }
  return false;
}

function inBound(maze, x, y) {
  return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length;
}
