// solution1
const validatePalindrome = s => {
  if (s === null) {
    return false
  }

  if (s.length === 0 || s === ' ') {
    return true
  }

  let left = 0,
      right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

//solution2
const validatePalindrome = s => {
  if (s === null) {
    return false
  }

  if (s.length === 0 || s === ' ') {
    return true
  }

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }

  return true
}
