function subarraySort(array) {
  if (array === null) return null;

  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      if (minOutOfOrder > num) minOutOfOrder = num;
      if (maxOutOfOrder < num) maxOutOfOrder = num;
    }
  }

  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let subarrayLeftIdx = 0;
  let subarrayRightIdx = array.length - 1;
  while (array[subarrayLeftIdx] <= minOutOfOrder) {
    //  it's <=, not <
    subarrayLeftIdx++;
  }
  while (array[subarrayRightIdx] >= maxOutOfOrder) {
    // it's >=, not >
    subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num < array[i - 1] || num > array[i + 1];
}
