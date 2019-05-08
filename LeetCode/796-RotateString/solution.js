var rotateString = (A, B) => {
  if (A === null || B === null) {
      return false
  }

  // example A = 'aa' and B = 'a', return false
  if (A.length !== B.length) {
      return false
  }

  A = A + A
  return A.includes(B)
};
