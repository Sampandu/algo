const permutationIndexII = A => {
  if (A === null) return;
  if (A.length <= 1) return 1;

  let permutation = 1;
  let multiFact = 1;
  let result = 1;
  const map = {};
  for (let i = A.length - 1; i >= 0; i--) {
    if (map[A[i]]) {
      map[A[i]]++;
      multiFact *= map[A[i]];
    } else {
      map[A[i]] = 1;
    }

    let minor = 0;
    for (let j = i + 1; j < A.length; j++) {
      A[j] < A[i] && minor++;
    }
    result += (minor * permutation) / multiFact;
    permutation *= A.length - i;
  }
  return result;
};
