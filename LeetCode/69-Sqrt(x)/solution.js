var mySqrt = function(x) {
  if (x === null) return -1;

  if (x === 0 || x === 1) return x;

  let start = 0;
  let end = x;
  let ans = 0;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (Math.floor(mid * mid) === x) {
      return mid;
    }
    if (Math.floor(mid * mid) < x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
