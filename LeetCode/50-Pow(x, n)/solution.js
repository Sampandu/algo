//non-recursion solution
const myPow = (x, n) => {
  if (x === null) {
    return -1
  }

  if (x === 0) {
    return 0
  }

  if (n === 0) {
    return 1
  }

  let ans = 1,
      base = x,
      sign = Math.sign(n)
      p = Math.abs(n)
  while (p !== 0) {
    if (p % 2 === 1) {
      ans *= base
    }
    base *= base
    p = Math.floor(p / 2)
  }
  return sign > 0 ? ans : (1 / ans)
}


//recursion solution
const myPow = (x, n) => {
  if (x === null) {
      return -1
  }

  if (x === 0) {
      return 0
  }

  if (n === 0) {
      return 1
  }

  const result = fastPower(x, Math.abs(n))
  return Math.sign(n) > 0 ? result : (1 / result)
}

const fastPower = (x, n) => {
  if (n === 0) {
      return 1
  }

  if (n % 2 === 0) {
      const temp = fastPower(x, n/2)
      return temp * temp
  } else {
      const temp = fastPower(x, Math.floor(n/2))
      return temp * temp * x
  }
}
