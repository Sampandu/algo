class Coordiate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const shortestPath = function(grid, source, destination) {
  // write your code here
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return -1;
  }

  //the shift is determined by knight
  const dx = [1, 1, -1, -1, 2, 2, -2, -2];
  const dy = [2, -2, 2, -2, 1, -1, 1, -1];

  const queue = [new Coordiate(source[0], source[1])];
  let steps = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const coor = queue.shift();

      if (coor.x === destination[0] && coor.y === destination[1]) {
        return steps;
      }
      for (let j = 0; j < 8; j++) {
        const ajX = coor.x + dx[j];
        const ajY = coor.y + dy[j];

        if (!inBound(grid, ajX, ajY) || grid[ajX][ajY] === 1) {
          continue;
        }
        queue.push(new Coordiate(ajX, ajY));
        grid[ajX][ajY] = 1;
      }
    }
    steps++;
  }

  return -1;
};

function inBound(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}
