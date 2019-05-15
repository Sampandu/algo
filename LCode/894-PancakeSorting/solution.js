const pancakeSort = array => {
  if (array === null || array.length === 0) {
    return
  }

  for (let i = array.length - 1; i > 0; i++) {
    let max = 0
    for (let j = 1; j <= i; j++) {
      if (array[j] > array[max]) {
        max = j
      }
    }

    if (max !== 0 && max !== i) {
      flip(array, max)
      flip(array, i)
    } else if (max === 0) {
      flip(array, i)
    }
  }

  return array
}

const flip = (array, n) => {
  for (let i = 0, j = n; i < j; i++, j--) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
