//solution1
const chunk = (array, size) => {
  const result = []
  for (let i = 0; i < array.length; i+=size) {
    const sChunk = array.slice(i, i+size)
    result.push(sChunk)
  }
  return result
}

// solution2
const chunk = (array, size) => {
  const result = []
  let sChunk = []
  for (let i = 0; i < array.length; i++) {
    if (sChunk.length < size) {
      sChunk.push(array[i])
    } else {
      result.push(sChunk)
      sChunk = [array[i]]
    }
  }
  result.push(sChunk)

  return result
}

//solution3
const chunk = (array, size) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const last = result[result.length - 1]
    if (!last || last.length === size) {
      result.push([array[i]])
    } else {
      last.push(array[i])
    }
  }
  return result
}
