const sortIntegers = A => {
  if (A === null || A.length === 0) {
    return
  }

  const temp = []
  mergeSort(A, 0, A.length - 1, temp)
}

const mergeSort = (A, start, end, temp) => {
  if (start >= end) {
    return
  }

  const mid = Math.floor((start + end) / 2)

  mergeSort(A, start, mid, temp)
  mergeSort(A, mid + 1, end, temp)
  merge(A, start, end, temp)
}

const merge = (A, start, end, temp) => {
  const mid = Math.floor((start + end) / 2)
  let leftIdx = start,
      rightIdx = mid + 1,
      index = leftIdx

  while (leftIdx <= mid && rightIdx <= end) {
    if (A[leftIdx] <= A[rightIdx]) {
      temp[index++] = A[leftIdx++]
    } else {
      temp[index++] = A[rightIdx++]
    }
  }

  while (leftIdx <= mid) {
    temp[index++]= A[leftIdx++]
  }

  while (rightIdx <= end) {
    temp[index++] = A[rightIdx++]
  }

  for (let i = start; i <= end; i++) {
    A[i] = temp[i]
  }
}
