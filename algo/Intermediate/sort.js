// sort - Implement the sort function to sort an array of numbers in O(N×log(N)) time.

// sort([])                              // []
// sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]

// solution1: quick sort
const sort = arr => {
  if (arr === null || arr.length === 0) {
    return [];
  }

  quickSort(arr, 0, arr.length - 1);
  return arr;
};

const quickSort = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  let left = start,
    right = end;
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }
    while (left <= right && arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  quickSort(arr, start, right);
  quickSort(arr, left, end);
};
