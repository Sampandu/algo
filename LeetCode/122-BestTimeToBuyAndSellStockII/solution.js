var maxProfit = function(prices) {
  if (prices === null || prices.length === 0) return 0;

  let min_so_far = Infinity;
  let profits = 0;
  for (let i = 0; i < prices.length; i++) {
    min_so_far = Math.min(min_so_far, prices[i]);
    if (
      (i === prices.length - 1 && prices[i] > prices[i - 1]) ||
      prices[i] >= prices[i + 1]
    ) {
      profits += prices[i] - min_so_far;
      min_so_far = Infinity;
    }
  }
  return profits;
};
