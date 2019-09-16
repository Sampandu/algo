{
  /*
Solution1: DP
hold[i] = Math.max(hold[i - 1], held[i - 1] - prices[i])
rest[i] = Math.max(rest[i - 1], sold[i - 1])
sold[i] = hold[i - 1] + prices[i]
*/
}

var maxProfit = function(prices) {
  if (prices === null || prices.length === 0) return 0;

  let rest = 0,
    sold = 0,
    hold = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    hold = Math.max(hold, rest - prices[i]);
    rest = Math.max(rest, rest + sold);
    sold = hold + prices[i];
  }
  return Math.max(rest, sold);
};
