const triangleCount = S => {
  if (S === null || S.length <= 2) {
    return 0
  }

  S = S.sort((a,b) => a - b)

  let count = 0
  for (let i = 0; i < S.length; i++) {
    let left = 0,
        right = i - 1
    while (left < right) {
      if (S[left] + S[right] > S[i]) {
        count += right - left
        right--
      } else {
        left++
      }
    }
  }
  return count
}
