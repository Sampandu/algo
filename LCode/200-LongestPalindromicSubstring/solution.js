//solution1, time complexity O(n^2)
const longestPalindrome = s => {
  if (s === '') {
    return null
  }

  let longest = 0,
      len = 0,
      start = 0

  for (let i = 0; i < s.length; i++) {
    //check string whose length is odd
    len = findLength(s, i, i)
    if (len > longest) {
      longest = len
      start = i - Math.floor(len / 2)
    }

    //check string whose length is even
    len = findLength(s, i, i + 1)
    if (len > longest) {
      longest = len
      start = i - Math.floor(len / 2) + 1  //'start' needs +1
    }
  }
  return s.slice(start, start + longest)
}

const findLength = (s, left, right) => {
  let len = 0
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break
    }
    len += left === right ? 1 : 2
    left--
    right++
  }
  return len
}
