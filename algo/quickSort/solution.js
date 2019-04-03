//solution
const quickSort = (arr, left, right) => {
  if(arr.length === 0) return arr

  const partitionIndex = partition(arr, left, right)
  if(left < partitionIndex - 1)  quickSort(arr, left, partitionIndex - 1 )
  if(partitionIndex + 1 < right)  quickSort(arr, partitionIndex + 1, right)
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
