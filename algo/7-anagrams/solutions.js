//solution1
const anagrams = (str1, str2) => {
  return cleanStr(str1) === cleanStr(str2)
}

//helper function, remove space, punctuation letters
const cleanStr = str => {
  return str.toLowerCase().match(/[a-z]/g).sort().join()
}
