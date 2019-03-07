// solutions1
const reverseInt = num => {
  const numString = Math.abs(num).toString()
  const rev = numString.split('').reduce((rev, cha) => rev = cha + rev, '')
  return num >= 0 ? +rev : -rev
}
