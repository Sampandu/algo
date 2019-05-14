//solution1
const sortInteger = A => {
  if (A === null || A.length === 0) {
    return
  }

  quickSort(A, 0, A.length - 1)
}

const quickSort = (A, start, end) => {
  if (start >= end) {
    return
  }

  let left = start,
      right = end

  //1, pivot, A[start], A[end]
  //it is value,not index
  const pivot = A[Math.floor((start + end) / 2)]

  //2, left <= right, not left < right
  while (left <= right) {
    //3, A[left] < pivot, not <=
    while (left <= right && A[left] < pivot) {
      left++
    }

    while (left <= right && A[right] > pivot) {
      right--
    }

    if (left <= right) {
      const temp = A[left]
      A[left] = A[right]
      A[rigth] = temp
      left++
      right--
    }
  }

  quickSort(A, start, right)
  quickSort(A, left, end)
}


//solution2
const quickSort = (arr, left, right) => {
  if (arr.length === 0) {
    return arr
  }

  const partitionIndex = partition(arr, left, right)
  if (left < partitionIndex - 1) {
    quickSort(arr, left, partitionIndex - 1 )
  }

  if (partitionIndex + 1 < right) {
    quickSort(arr, partitionIndex + 1, right)
  }
}

const partition = (arr, start, end) => {
  let startIdx = start
  const pivot = arr[end]
  for(let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, startIdx)
      startIdx++
    }
  }
  swap(arr, end, startIdx)
  return startIdx
}

const swap = (arr, i, j) => {
  if(i === j) return arr
  const temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}
