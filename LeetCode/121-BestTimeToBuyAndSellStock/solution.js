var maxProfit = function(prices) {
  if (prices === null || prices.length === 0) return 0;

  let min_so_far = Infinity;
  let max_diff = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    min_so_far = Math.min(min_so_far, prices[i]);
    max_diff = Math.max(max_diff, prices[i] - min_so_far);
  }
  return max_diff;
};
