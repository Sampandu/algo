//the string might has interior spaces, like ' 2/ 4  + 2'
var calculate = function(s) {
  if (s === null || s.length === 0) return;

  s = s.trim();
  const operand = [];
  const operator = [];
  let prev = 0;
  for (let i = 0; i < s.length; i++) {
    if (isOperator(s[i])) {
      const subStr = s.slice(prev, i).trim();
      operand.push(subStr);
      while (
        operator.length !== 0 &&
        precedence(s[i]) <= precedence(operator[operator.length - 1])
      ) {
        process(operand, operator);
      }
      operator.push(s[i]);
      prev = i + 1;
    }

    if (i === s.length - 1) {
      operand.push(s.slice(prev));
    }
  }

  while (operator.length) {
    process(operand, operator);
  }

  //case: "42"
  if (operand.length) {
    let result = '';
    while (operand.length) {
      result = operand.pop() + result;
    }
    return Number(result);
  }

  // return operand.pop();
};

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function precedence(char) {
  if (char === '+' || char === '-') return 1;
  if (char === '*' || char === '/') return 2;
}

function process(operand, operator) {
  const num2 = +operand.pop(); //transform string into number
  const num1 = +operand.pop(); //transform string into number

  const op = operator.pop();
  let result = 0;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = Math.floor(num1 / num2); //round down
  }
  operand.push(result);
}
