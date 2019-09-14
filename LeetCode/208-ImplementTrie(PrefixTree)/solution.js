/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
  this.endSymbol = '*';
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!(letter in current)) {
      current[letter] = {};
    }
    current = current[letter];
  }
  current[this.endSymbol] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!(letter in current)) {
      return false;
    }
    current = current[letter];
  }
  return this.endSymbol in current;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let current = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const letter = prefix[i];
    if (!(letter in current)) {
      return false;
    }
    current = current[letter];
  }
  return true;
};
