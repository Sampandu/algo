//solution1
const TwoSum = function() {
  this.hashMap = new Map()
}

TwoSum.prototype.add = function(number) {
  this.hashMap[number] = this.hashMap[number] || 0
  this.hashMap[number]++
}

TwoSum.prototype.find = function(value) {
  for (let key in this.hashMap) {
    const diff = value - parseInt(key)

    if (diff === key) {
      if (this.hashMap[diff] >= 2) {
        return true
      }
    } else if (this.hashMap[diff] >= 1) {
      return true
    }
  }
  return false
}

//solution2
class TwoSum {
  constructor() {
    this.hashMap = {}
  }

  add(number) {
    this.hashMap[number] = this.hashMap[number] || 0
    this.hashMap[number]++
  }

  find(value) {
    for (let key in this.hashMap) {
      const diff = value - parseInt(key)

      if (diff === key) {
        if (this.hashMap[diff] >= 2) {
          return true
        }
      } else if (this.hashMap[diff] >= 1) {
        return true
      }
    }
    return false
  }
}
