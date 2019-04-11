//recursion solution
//array is sorted!!!
const binarySearch = (arr, start, end, target) => {
  if(arr.length === 0) return -1

  if(start > end) return -1

  const mid = start + Math.floor((end - start) / 2)
  if(arr[mid] === target) return mid
  if(arr[mid] < target) return binarySearch(arr, mid + 1, end, target)
  else return binarySearch(arr, start, mid - 1, target)
}

//non-recursion solution
//array is sorted!!!
const binarySearch = (sortedArr, target) => {
  if(sortedArr.length === 0) return null

  let start = 0,
      end = sortedArr.length - 1

  while(start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (sortedArr[mid] === target) {
      return mid
    }
    if (sortedArr[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  if(sortedArr[start] === target) {
    return start
  }
  if(sortedArr[end] === target) {
    return end
  }

  return null
}
