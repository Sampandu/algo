//non-recursion solution
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

//recursion solution
const power = (x, n) => {
  if (n === 0) {
    return 1
  }

  if (n % 2 === 0) {
    const temp = power(x, n/2)
    return temp * temp
  } else {
    const temp = power(x, Math.floor(n/2))
    return temp * temp * x
  }
}
