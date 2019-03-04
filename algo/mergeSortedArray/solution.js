function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2
  }

  if (arr2.length === 0) {
    return arr1
  }

  let mergeResult = []

  while(arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      const temp = arr1.shift()
      mergeResult.push(temp)
    } else {
      const temp = arr2.shift()
      mergeResult.push(temp)
    }
  }

  return arr1.length > 0 ? [...mergeResult, ...arr1] : [...mergeResult, ...arr2]
}
