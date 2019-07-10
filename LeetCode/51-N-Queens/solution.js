//solution
//how to check whether two points are at the same diagonal: x1 - y1 = x2 - y2

var solveNQueens = function(n) {
  const results = []
  if (n <= 0) return results

  const visited = {
    col: new Set(),
    sum: new Set(),
    diff: new Set()
  }
  dfs(n, [], results, visited)
  return results
};

function dfs(n, path, results, visited) {
  if (n === path.length) {
    const pathStr = draw(path)
    results.push(pathStr)
    return
  }

  let row = path.length
  for (let col = 0; col < n; col++) {
    if (isNotValid(row, col, visited)) {
      continue
    }

    path.push(col)
    visited.col.add(col)
    visited.sum.add(row + col)
    visited.diff.add(row - col)
    dfs(n, path, results, visited)
    visited.col.delete(col)
    visited.sum.delete(row + col)
    visited.diff.delete(row - col)
    path.pop()
  }
}

function isNotValid(row, col, visited) {
  return visited.col.has(col) || visited.sum.has(row + col) || visited.diff.has(row - col)
}

function draw(path) {
  const n = path.length
  const result = []
  for (let i = 0; i < n; i++) {
    const col = path[i]
    let str = ''
    for (let j = 0; j < n; j++) {
      if (j === col) {
        str += 'Q'
      } else {
        str += '.'
      }
    }
    result.push(str)
  }
  return result
}