//solution1, recursion
const fibonacciMaster = n => {
  if (n === null || n < 0) {
    return
  }

  const cache = {}
  return function fib(n) {
    if (n in cache) {
      return cache[n]
    } else {
      if (n <= 1) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

const fib = fibonacciMaster()

//solution2, non-recursion
const fibonacciMaster = n => {
  if (n === null || n < 0) {
    return
  }

  if (n <= 1) {
    return n
  }

  let sumArr = [0, 1]
  for (let i = 2; i <= n; i++) {
    const sum = sumArr[ i - 1] + sumArr[i - 2]
    sumArr.push(sum)
  }

  return sumArr[sumArr.length - 1]
}

//solution3
const fibonacciMaster = n => {
  if (n <= 1) {
    return n
  }

  return fibonacciMaster(n - 1) + fibonacciMaster(n - 2)
}
