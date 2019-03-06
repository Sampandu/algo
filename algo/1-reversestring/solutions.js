//solution1, using built-in Array.reverse() modify in-place
const reverse = string => {
  return string.split('').reverse().join('')
}

//solution2, using buit-in Array.reduce() output a single value
const reverse = string => {
  return string.split('').reduce((res, i) => res = i + res, '')
}
