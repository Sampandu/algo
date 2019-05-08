const gcd = (a, b) => {
  if (a === null || b === null) {
    return -1
  }

  if (a === b) {
    return a
  }

  const big = a > b ? a : b
  const small = a < b ? a : b

  return commonDivider(big, small)
}

const commonDivider = (big, small) => {
  if (small !== 0) {
    return commonDivider(small, big % small)
  } else {
    return big
  }
}
