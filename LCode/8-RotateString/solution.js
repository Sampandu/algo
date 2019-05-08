const rotateString = (str, offset) => {
  if (str === null || str.length === 0) {
    return -1
  }
  //if offset is larger than the length of the string, use module %
  offset = offset % str.length
  str = reverse(str, 0, str.length - 1)
  str = reverse(str, 0, offset - 1)
  str = reverse(str, offset, str.length - 1)
  return str
}

const reverse = (str, start, end) => {
  //elements in string can not be swop with each other
  str = str.split('')
  for (let i = start, j = end; i < j; i++, j--) {
    const temp = str[i]
    str[i] = str[j]
    str[j] = temp
  }
  return str.join('')
}
