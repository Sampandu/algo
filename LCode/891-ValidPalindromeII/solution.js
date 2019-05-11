const validPalindrome = s => {
  if (s === null) {
    return false
  }

  if (s === ' ' || s.length === 0) {
    return true
  }

  let start = 0,
      end = s.legnth - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      break
    }
    start++
    end--
  }

  if (start >= end) {
    return true
  }
  return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1)
}

const isPalindrome = (arr, start,end) => {
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false
    }
    start++
    end--
  }
  return true
}
