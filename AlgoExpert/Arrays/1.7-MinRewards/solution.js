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
function minRewards(scores) {
  if (scores === null) return null;

  const rewards = scores.map(n => 1);
  const localMinIdxs = getLocalMinIdx(scores);

  for (const localMinIdx of localMinIdxs) {
    expandFromLocalMinIdx(localMinIdx, scores, rewards);
  }

  return rewards.reduce((sum, n) => (sum += n), 0);
}

function expandFromLocalMinIdx(localMinIdx, scores, rewards) {
  let leftIdx = localMinIdx - 1;
  while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
    rewards[leftIdx] = Math.max(rewards[leftIdx + 1] + 1, rewards[leftIdx]);
    leftIdx--;
  }
  let rightIdx = localMinIdx + 1;
  while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
    rewards[rightIdx] = Math.max(rewards[rightIdx - 1] + 1, rewards[rightIdx]);
    rightIdx++;
  }
}

function getLocalMinIdx(scores) {
  if (scores.length === 1) return [0];

  const localMinIdx = [];
  for (let i = 0; i < scores.length; i++) {
    if (i === 0 && scores[i] < scores[i + 1]) localMinIdx.push(i);
    if (i === scores.length - 1 && scores[i] < scores[i - 1])
      localMinIdx.push(i);
    if (scores[i] < scores[i - 1] && scores[i] < scores[i + 1])
      localMinIdx.push(i);
  }
  return localMinIdx;
}

// solution 3, Time: O(n^2), space: O(n)
function minRewards(scores) {
  if (scores === null) return null;

  const rewards = scores.map(s => 1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
      continue;
    }
    backTracking(i, scores, rewards);
  }
  return rewards.reduce((a, b) => a + b);
}

function backTracking(i, scores, rewards) {
  while (i - 1 >= 0 && scores[i - 1] > scores[i]) {
    rewards[i - 1] = Math.max(rewards[i] + 1, rewards[i - 1]);
    i--;
  }
}
