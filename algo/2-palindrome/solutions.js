//solution1
const palindrome = string => {
  const reverseStr = string.split('').reverse().join('')
  return reverseStr === string
}

//solution2
const palindrome = string => {
  const len = string.length
  const mid = Math.floor(len / 2)

  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false
    }
  }

  return true
}
