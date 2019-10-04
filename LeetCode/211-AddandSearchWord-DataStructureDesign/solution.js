class WordDictionary {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  addWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in current)) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = true;
  }

  search(word) {
    //dfs
    const stack = [{ idx: 0, node: this.root }]; //using idx to keep track of level
    while (stack.length) {
      const { idx, node } = stack.pop();

      if (idx === word.length) {
        if (node[this.endSymbol]) return true;
        continue;
      }

      const letter = word[idx];
      if (letter === '.') {
        if (!node) continue;

        for (const e in node) {
          stack.push({ idx: idx + 1, node: node[e] });
        }
      } else {
        if (!node[letter]) {
          continue;
        }
        stack.push({ idx: idx + 1, node: node[letter] });
      }
    }
    return false;
  }
}
