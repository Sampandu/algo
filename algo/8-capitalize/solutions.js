//solution1
const capitalize = str => {
  return str.split(' ')
            .map(word => word[0]+ word.slice(1))
            .toUpperCase()
            .join(' ')
}

//solution2
const capitalize = str => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    i === 0 || str[i-1] === ' '
      ? result += str[i].toUpperCase()
      : result += str[i]
  }


  return result
}
