//solutino 1, buttom up
var climbStairs = function(n) {
  if (n === null) return;

  const res = new Array(n + 1).fill(0);
  res[0] = 1;

  for (let i = 0; i <= n; i++) {
    if (i + 1 <= n) res[i + 1] = res[i + 1] + res[i];
    if (i + 2 <= n) res[i + 2] = res[i + 2] + res[i];
  }

  return res[n];
};

//solution 2, top down
var climbStairs = function(n) {
  if (n === null) return;

  const cache = {};
  return stair(n, cache);
};

function stair(n, cache) {
  if (n in cache) {
    return cache[n];
  } else {
    if (n === 0) return 1;
    else if (n < 0) return 0;
    //case stair(1) = stair(0) + stair(-1)
    else {
      cache[n] = stair(n - 1, cache) + stair(n - 2, cache);
      return cache[n];
    }
  }
}
