//solution1, time complexity: O(n)
const isValid = str => {
  const stack = []

  for(let i = 0; i < str.length; i++) {
    const cur = str[i]

    if (cur === '(' || cur === '[' || cur === '{') {
      stack.push(cur)
    } else if (cur === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else if (cur === ']' && stack[stack.length - 1] === '[') {
      stack.pop()
    } else if (cur === '}' && stack[stack.length - 1] === '{') {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0 ? true : false
}

//solutino2, time complexity O(n^2)
const isValid = str => {
  const stack = []
  const map = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }

  for (let char of str) {
    if(char in map) {
      if(map[char] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(char)
    }
  }
    return stack.length === 0 ? true : false
}
