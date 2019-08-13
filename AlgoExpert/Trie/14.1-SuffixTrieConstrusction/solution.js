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
      if (!(letter in currentNode)) {
        return false;
      }
      currentNode = currentNode[letter];
    }
    // for (let i = 0; i < string.length; i++) {
    //   if (!(string[i] in currentNode)) {
    //     return false
    //   }
    // 	currentNode = currentNode[string[i]]
    // }
    return this.endSymbol in currentNode; //typo this.endSymbal
  }
}
