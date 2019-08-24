var change = function(amount, coins) {
  if (coins === null || coins.length === 0) return 0;
  if (amount === 0) return 1;

  const results = [];
  coins.sort((a, b) => a - b);
  findChange(amount, coins, 0, [], results, 0);
  return results.length;
};

function findChange(amount, coins, startIdx, buffer, results, currentSum) {
  if (currentSum > amount) {
    return;
  }

  if (currentSum === amount) {
    results.push(buffer);
    return;
  }

  for (let i = startIdx; i < coins.length; i++) {
    buffer.push(coins[i]);
    findChange(amount, coins, i, buffer, results, currentSum + coins[i]);
    buffer.pop();
  }
}
