var calculate = function(s) {
  if (s === null || s.length === 0) return;

  s = s.trim();
  let prev = 0;
  const operand = [];
  const operator = [];

  for (let i = 0; i < s.length; i++) {
    if (isOperand(s[i])) {
      if (isOperand(s[i + 1])) {
        continue;
      } else {
        operand.push(s.slice(prev, i + 1).trim());
      }
    } else if (isOperator(s[i])) {
      while (
        operator.length !== 0 &&
        precedence(s[i]) <= precedence(operator[operator.length - 1])
      ) {
        process(operand, operator);
      }
      operator.push(s[i]);
      prev = i + 1;
    } else if (s[i] === '(') {
      operator.push('(');
      prev = i + 1;
    } else if (s[i] === ')') {
      while (operator[operator.length - 1] !== '(') {
        process(operand, operator);
      }
      operator.pop();
    }
  }

  while (operator.length) {
    process(operand, operator);
  }

  if (operand.length) {
    let result = '';
    while (operand.length) {
      result = operand.pop() + result;
    }
    return Number(result);
  }

  return operand.pop();
};

function isOperand(char) {
  return char >= '0' && char <= '9';
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function precedence(char) {
  if (char === '+' || char === '-') return 1;
  if (char === '*' || char === '/') return 2;
}

function process(operand, operator) {
  const num2 = +operand.pop();
  const num1 = +operand.pop();

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
