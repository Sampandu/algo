const searchMatrix = (matrix, target) => {
  //example, []
  if (matrix === null || matrix.length === 0) {
    return 0
  }

  //example, [[]]
  if (matrix[0] === null || matrix[0].length === 0) {
    return 0
  }

  //search from bottom left to top right
  let n = matrix.length - 1,
      m = matrix[0].length - 1,
      x = n,
      y = 0,
      count = 0
  while (x >= 0 && y <= m) {
    if (matrix[x][y] < target) {
      y++
    } else if (matrix[x][y] > target) {
      x--
    } else {
      count++
      x--
      y++
    }
  }
  return count
}
