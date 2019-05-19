//solution, time O(n), space O(n)
const sortLetters = (chars) => {
  if (chars === null || chars.length <= 0) {
      return
  }

  const charsArr = chars.split('')

  let left = 0,
      right = chars.length - 1
  while (left <= right) {
      while (left <= right && chars.charCodeAt(left) >= 'a'.charCodeAt(0)) {
          left++
      }
      while (left <= right && chars.charCodeAt(right) < 'a'.charCodeAt(0)) {
          right--
      }

      if (left <= right) {
          const temp = charsArr[left]
          charsArr[left] = charsArr[right]
          charsArr[right] = temp
          left++
          right--
      }
  }
  return charsArr.join('')
}
