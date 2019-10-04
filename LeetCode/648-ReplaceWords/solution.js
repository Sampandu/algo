/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const trie = new Trie();
  for (let i = 0; i < dict.length; i++) {
    trie.addWord(dict[i]);
  }

  let res = '';
  sentence = sentence.split(' ').forEach(word => {
    res += trie.searchRoot(word) ? ' ' + trie.searchRoot(word) : ' ' + word;
  });
  return res.trim();
};

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  addWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = true;
  }

  searchRoot(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in current)) {
        return false;
      }
      current = current[letter];
      if (current[this.endSymbol]) {
        return word.slice(0, i + 1);
      }
    }
  }
}
