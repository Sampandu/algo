//solution1
//edge case: " ", ".,"
const isPalindrome = s => {
  if (s === null) {
    return false
  }

  if (s.length === 0 || s === ' ') {
    return true
  }

  //.match() returns an array
  s = s.match(/[a-z0-9]/gi)

  //process non-alphanumeric case
  if (s === null) {
    return false
  }

  s = s.join('').toLowerCase()
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
}


//solution2
const isPalindrome = s => {
  if (s === null) {
      return false
  }

  if (s.length === 0) {
      return true
  }

  regrx = /[^a-z0-9]/i
  let left = 0,
      right = s.length - 1
  while (left < right) {
      while (regrx.test(s[left])) {
          left++
      }

      while (regrx.test(s[right])) {
          right--
      }

      if (s[left] && s[right] && s[left].toLowerCase() !== s[right].toLowerCase()) {
          return false
      }

      left++
      right--
  }
  return true
}
