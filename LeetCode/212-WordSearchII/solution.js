//solution, if the words in the dictionary are long, it might exceed the time limit of the test case. A better solution is to use Trie data structure
var findWords = function(board, words) {
  if (board === null || board.length === null) return [];

  if (board[0] === null || board[0].length === 0) return [];

  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push([]);
  }

  const prefix = getPrefixSet(words);
  const wordSet = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      dfs(board, visited, i, j, String(board[i][j]), prefix, wordSet);
      visited[i][j] = false;
    }
  }

  return [...wordSet];
};

function getPrefixSet(words) {
  const map = {};
  for (let word of words) {
    for (let i = 0; i < word.length - 1; i++) {
      const prefix = word.slice(0, i + 1);
      if (!map[prefix]) map[prefix] = false;
    }
    map[word] = true;
  }
  return map;
}

function dfs(board, visited, x, y, word, prefix, wordSet) {
  const dx = [0, -1, 1, 0];
  const dy = [1, 0, 0, -1];

  if (!Object.keys(prefix).includes(word)) return;

  if (prefix[word]) {
    wordSet.add(word);
  }

  for (let i = 0; i < 4; i++) {
    const adjx = x + dx[i];
    const adjy = y + dy[i];

    if (!onboard(board, adjx, adjy) || visited[adjx][adjy]) {
      continue;
    }

    word += board[adjx][adjy];
    visited[adjx][adjy] = true;
    dfs(board, visited, adjx, adjy, word, prefix, wordSet);
    visited[adjx][adjy] = false;
    word = word.slice(0, -1);
  }
}

function onboard(board, x, y) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}
