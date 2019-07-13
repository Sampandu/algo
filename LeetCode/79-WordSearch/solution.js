//solution1
var exist = function(board, word) {
  if (board === null || board.length === 0 || board[0].length === 0)
    return null;

  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      console.log(i, j, visited);
      if (dfs(board, 0, i, j, word, visited)) {
        return true;
      }
      visited[i][j] = false;
    }
  }
  return false;
};

function dfs(board, index, x, y, word, visited) {
  const char = board[x][y];
  if (char !== word[index]) {
    return false;
  }

  if (index === word.length - 1) {
    return true;
  }

  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];
  for (let i = 0; i < 4; i++) {
    const adjX = x + dx[i];
    const adjY = y + dy[i];

    if (!onboard(board, adjX, adjY) || visited[adjX][adjY]) {
      continue;
    }
    console.log('1', x, y, visited);
    visited[adjX][adjY] = true;
    console.log('2', x, y, visited);
    if (dfs(board, index + 1, adjX, adjY, word, visited)) {
      return true;
    }
    visited[adjX][adjY] = false;
  }
  return false;
}

function onboard(board, x, y) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}

//solution2, if the word is a long one, it exceeds the time limit of test case
var exist = function(board, word) {
  if (board === null || board.length === 0 || board[0].length === 0)
    return null;

  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push([]);
  }

  const prefix = getPrefixWords(word);
  let result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      dfs(board, visited, i, j, board[i][j], result, prefix);
      visited[i][j] = false;
    }
  }

  return result.includes(word);
};

function getPrefixWords(word) {
  const map = {};
  for (let i = 0; i < word.length - 1; i++) {
    const char = word.slice(0, i + 1);
    if (!map[char]) {
      map[char] = false;
    }
  }
  map[word] = true;
  return map;
}

function dfs(board, visited, x, y, word, result, prefix) {
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];

  if (!Object.keys(prefix).includes(word)) {
    return;
  }

  if (prefix[word]) {
    result.push(word);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const adjX = x + dx[i];
    const adjY = y + dy[i];

    if (!onboard(board, adjX, adjY) || visited[adjX][adjY]) {
      continue;
    }

    visited[adjX][adjY] = true;
    dfs(board, visited, adjX, adjY, word + board[adjX][adjY], result, prefix);
    visited[adjX][adjY] = false;
  }
}

function onboard(board, x, y) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}
