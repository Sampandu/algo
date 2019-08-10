function hasSingleCycle(array) {
  let numberElementsVisited = 0;
  let currentIdx = 0;
  while (numberElementsVisited < array.length) {
    if (numberElementsVisited > 0 && currentIdx === 0) {
      return false;
    }
    numberElementsVisited++;
    currentIdx = getNextIndex(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIndex(currentIdx, array) {
  const jump = array[currentIdx];
  const next = (currentIdx + jump) % array.length;
  return next >= 0 ? next : next + array.length;
}
