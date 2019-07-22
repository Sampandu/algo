//solution1
function caesarCipherEncryptor(string, key) {
  if (string === null || string.length === 0 || key === null) return null;

  const newString = [];
  const newKey = key % 26;
  for (let letter of string) {
    newString.push(getNewLetter(letter, newKey));
  }
  return newString.join('');
}

function getNewLetter(letter, key) {
  const newCharCode = letter.charCodeAt(0) + key;
  return newCharCode <= 122
    ? String.fromCharCode(newCharCode)
    : String.fromCharCode(96 + (newCharCode % 122));
}

//solution2
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const mod = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const beginCharCode = 'a'.charCodeAt(0);

  const result = string.split('').map(letter => {
    const charCode =
      ((letter.charCodeAt(0) - beginCharCode + key) % mod) + beginCharCode;
    return String.fromCharCode(charCode);
  });
  return result.join('');
}
