const permutationIndex = function(A) {
  if (A === null) return;

  let permutation = 1;
  let result = 1;
  for (let i = A.length - 2; i >= 0; i--) {
    let smaller = 0;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[i]) {
        smaller++;
      }
    }
    result += smaller * permutation;
    permutation *= A.length - i;
  }
  return result;
};


