const searchMatrix = function (matrix, target) {
  // write your code here
  if(matrix.length === 0) return false

  const row = matrix.length,
      col = matrix[0].length

  let start = 0,
      end = row * col - 1
  while(start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      const number = matrix[Math.floor(mid / col)][Math.floor(mid % col)]
      if(number === target) {
          return true
      }
      if(number < target) {
          start = mid
      } else {
          end = mid
      }
  }

  if(matrix[Math.floor(start / col)][Math.floor(start % col)] === target || matrix[Math.floor(end / col)][Math.floor(end % col)] === target) return true
  else return false
}
