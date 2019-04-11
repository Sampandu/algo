//recursion solution
//array is sorted!!!
const binarySearch = (sortedArr, target) => {

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
