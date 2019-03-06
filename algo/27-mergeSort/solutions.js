function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)    //divide
  const right = arr.slice(center)     //divide

  return merge(mergeSort(left), mergeSort(right))  //conquer
}

function merge(left, right) {
  let result = []
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}
