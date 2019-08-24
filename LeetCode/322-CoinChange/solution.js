var coinChange = function(coins, amount) {
  if (coins === null || coins.length === 0) return 0;
  if (amount === 0) return 0;

  const results = [];
  findChange(coins, amount, 0, [], results, 0);
  return results.length === 0 ? -1 : Math.min(...results);
};

function findChange(coins, amount, startIdx, buffer, results, currentSum) {
  if (currentSum > amount) {
    return;
  }

  if (currentSum === amount) {
    results.push(buffer.length);
    return;
  }

  for (let i = startIdx; i < coins.length; i++) {
    buffer.push(coins[i]);
    findChange(coins, amount, i, buffer, results, currentSum + coins[i]);
    buffer.pop(coins[i]);
  }
}
