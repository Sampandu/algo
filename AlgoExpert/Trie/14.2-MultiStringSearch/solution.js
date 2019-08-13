function multiStringSearch(bigString, smallStrings) {
  const trie = new SuffixTrie(bigString);
  return smallStrings.map(string => trie.contains(string));
}

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(startIdx, string) {
    let currentNode = this.root;
    for (let j = startIdx; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in currentNode)) {
        currentNode[letter] = {};
      }
      currentNode = currentNode[letter];
    }
    currentNode[this.endSymbol] = true;
  }

  contains(string) {
    let currentNode = this.root;
    for (const letter of string) {
      //using for...of (not for...in) to iterate a string
      if (!(letter in currentNode)) {
        return false;
      }
      currentNode = currentNode[letter];
    }
    return true;
  }
}
