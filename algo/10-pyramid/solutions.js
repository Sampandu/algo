// solution1
const pyramid = n => {
  const midPoint = Math.floor((2*n-1)/2)
  for (let i = 0; i < n; i++) {
    let step = ''
    for (let j = 0; j < 2*n-1; j++) {
      midPoint - i <= j && j <= midPoint + i ? step += '#' : step += ' '
    }
    console.log(step)
  }
}

//solution2, recursion
const pyramid = (n, row=0, step='') => {
  if (row === n) {
    return
  }

  if (step.length === 2 * n -1) {
    console.log(step)
    return pyramid(n, row+1)
  }

  const midPoint = Math.floor((2*n - 1)/2)
  let add = ''
  if (midPoint - row <= step.length && step.length <= midPoint + row) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, step+=add)
}
