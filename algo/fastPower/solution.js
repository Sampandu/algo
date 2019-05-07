const power = (x, n) => {
  let ans = 1,
      base = x
  while (n !== 0) {
    if (n % 2 === 1) {
      ans *= base
    }
    base *= base
    n = Math.floor(n / 2)
  }
  return ans
}
