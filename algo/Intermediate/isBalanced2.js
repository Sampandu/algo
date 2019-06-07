// isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.

// isBalanced2('(foo { bar (baz) [boo] })') // true
// isBalanced2('foo { bar { baz }')         // false
// isBalanced2('foo { (bar [baz] } )')      // false

const isBalanced2 = str => {
  if (str === null || str.length === 0) {
    return false;
  }

  const stack = [],
    bracePair = {
      '}': '{',
      ']': '[',
      ')': '(',
    };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      if (bracePair[str[i]] !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};
