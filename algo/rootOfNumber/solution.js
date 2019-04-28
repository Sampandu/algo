const root = (x, n) => {
  if (x === 0) {
    return 0
  }

  if (n === 1) {
    return x
  }

  let left = 0,
      right = x

  while (right - left >= 0.001) {
    const mid = left + (right - left) / 2
    const value = Math.pow(mid, n)
    if (Math.abs(x - value) < 0.001) {
      return mid
    } else if (value > x) {
      right = mid
    } else {
      left = mid
    }
  }
  return left
}
