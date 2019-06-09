/*
  From LeetCode Discussion
  Thought Process: (BFS w/ Optimization)
   - Basically we start from "beginWord". Let's say 'Hit'.
   - We take all the characters in beginWord ['h', 'i', 't']
   - compare it against all possibilities. ait, bit, cit.....then..hat, hbt..'hot' -> Yes it's in the list. Add it to queue.
   - Keep digging until our queue is empty or we don't have any more words to process.
   - Return 0 if we don't have any results or len if the endWord is found.
*/

var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList === null || wordList.length === 0) {
    return 0;
  }

  if (beginWord === endWord) {
    return 1;
  }

  let len = 1;
  let queue = [beginWord];
  const dict = new Set(wordList);
  const seen = new Set(queue);

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      if (word === endWord) {
        return len;
      }

      const arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
          arr[i] = String.fromCharCode(j);
          const temp = arr.join('');
          if (!seen.has(temp) && dict.has(temp)) {
            queue.push(temp);
            seen.add(temp);
          }
          arr[i] = word[i];
        }
      }
    }
    len++;
  }
  return 0;
};
