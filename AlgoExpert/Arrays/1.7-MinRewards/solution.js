// solution 1, Time: O(n), Space: O(n)
function minRewards(scores) {
  if (scores === null) return null;

  const rewards = scores.map(s => 1);

  for (let j = 1; j < scores.length; j++) {
    if (scores[j] > scores[j - 1]) {
      rewards[j] = Math.max(rewards[j - 1] + 1, rewards[j]);
    }
  }

  for (let j = scores.length - 2; j >= 0; j--) {
    if (scores[j] > scores[j + 1]) {
      rewards[j] = Math.max(rewards[j + 1] + 1, rewards[j]);
    }
  }
  return rewards.reduce((sum, e) => (sum += e), 0);
}

// solution 2, Time: O(n), space: O(n)

// solution 3, Time: O(n^2), space: O(n)
