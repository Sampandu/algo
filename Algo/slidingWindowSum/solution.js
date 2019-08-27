const slidingWindowSum = (array, k) => {
  if (array === null || array.length === 0 || k === 0) return;

  const results = [];
  const window = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (window.length === k) {
      results.push(sum);
      sum -= window.shift();
    }
    windodw.push(array[i]);
    sum += array[i];
  }
  results.push(sum);
  return results;
};
