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
