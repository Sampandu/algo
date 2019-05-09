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
