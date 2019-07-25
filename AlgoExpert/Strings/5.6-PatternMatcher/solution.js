/* eslint-disable complexity */
function patternMatcher(pattern, string) {
  if (pattern.length > string.length) return [];

  const newPattern = getNewPattern(pattern);
  const didSwitch = pattern[0] !== newPattern[0] ? true : false;
  const counts = { x: 0, y: 0 };
  const firstYPos = getCountsAndFirstYPos(newPattern, counts);
  if (counts['y'] !== 0) {
    for (let lenOfX = 1; lenOfX < string.length; lenOfX++) {
      const lenOfY = (string.length - lenOfX * counts['x']) / counts['y'];
      if (lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      const yIdx = firstYPos * lenOfX;
      const x = string.slice(0, lenOfX);
      const y = string.slice(yIdx, yIdx + lenOfY);
      const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
      if (string === potentialMatch.join('')) {
        return !didSwitch ? [x, y] : [y, x];
      }
    }
  } else {
    let lenOfX = string.length / counts['x'];
    if (lenOfX % 1 === 0) {
      const x = string.slice(0, lenOfX);
      const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
      if (string === potentialMatch.join('')) {
        return !didSwitch ? [x, ''] : ['', x];
      }
    }
  }
  return [];
}

function getNewPattern(pattern) {
  const patternLetters = pattern.split('');
  if (patternLetters[0] === 'x') {
    return patternLetters;
  } else {
    return patternLetters.map(char => (char === 'y' ? 'x' : 'y'));
  }
}

function getCountsAndFirstYPos(pattern, counts) {
  let firstYPos = null;
  for (let i = 0; i < pattern.length; i++) {
    //pattern
    const char = pattern[i];
    if (char === 'y' && counts[char] === 0) {
      counts[char]++;
      firstYPos = i;
    } else {
      counts[char]++;
    }
  }
  return firstYPos;
}
