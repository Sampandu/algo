function minNumberOfCoinsForChange(n, denoms) {
  //assume n and denoms are non-empty
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
      }
    }
  }
  return numOfCoins[n] === Infinity ? -1 : numOfCoins[n];
}
