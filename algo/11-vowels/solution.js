//solution1
const vowels = str => {
  const vowel = 'aeiou'.split('');
  let counter = 0;
  str
    .toLowerCase()
    .split('')
    .forEach(char => {
      vowel.includes(char) && counter++;
    });
  return counter;
};

//solution2
const vowels = str => {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
};

//solution3
const vowels = str => {
  if (str === null) {
    return;
  }

  return str.replace(/[^aeiou]/gi, '').length;
};
