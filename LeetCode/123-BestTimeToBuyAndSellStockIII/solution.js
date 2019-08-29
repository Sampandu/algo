var maxProfit = function(prices) {
  if (prices === null || prices.length === 0) return 0;

  const best_till_i = [];
  const best_from_i = [];

  let min_so_far = Infinity;
  let max = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    min_so_far = Math.min(min_so_far, prices[i]);
    max = Math.max(max, prices[i] - min_so_far);
    best_till_i[i] = max;
  }

  let max_so_far = -Infinity;
  max = -Infinity;
  for (let i = prices.length - 1; i >= 0; i--) {
    max_so_far = Math.max(max_so_far, prices[i]);
    max = Math.max(max, max_so_far - prices[i]);
    best_from_i[i] = max;
  }

  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, best_till_i[i] + best_from_i[i]);
  }
  return maxProfit;
};
