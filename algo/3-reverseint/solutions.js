// solution1, negative number is the trick
const reverseInt = num => {
  const numString = Math.abs(num).toString()
  const rev = numString.split('').reduce((rev, cha) => rev = cha + rev, '')
  return num >= 0 ? +rev : -rev
}


//solution2, Math.sign(num)
const reverseInt = num => {
  const reverse = num
                .toString()
                .split('')
                .reverse()
                .join('')
  return parseInt(reverse) * Math.sign(num)
}
