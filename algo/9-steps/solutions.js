//solution1
const steps = n => {
  for (let i = 0; i < n; n++) {
    let step = ''
    for (let j = 0; j < n; j++) {
      j <= i ? step += '#' : step += ' '
    }
    console.log(step)
  }
}
