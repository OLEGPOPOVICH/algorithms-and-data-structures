const Stack = require('../stack');

/**
 * Операции со значениями
 *
 * Реализуйте функцию, которая принимает операции в виде обратной польской нотации и вычисляет значение
 *
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 */
const calculateRPN = (tokens) => {
  const stack = new Stack();

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const lastValue = stack.pop();
      const preLastValue = stack.pop();

      switch (token) {
        case '+':
          stack.push(lastValue + preLastValue);
          break;
        case '−':
          stack.push(lastValue - preLastValue);
          break;
        case '*':
          stack.push(lastValue * preLastValue);
          break;
        case '/':
          stack.push(Math.trunc(lastValue / preLastValue));
          break;
      }
    }
  }

  return stack.pop();
}

console.log(calculateRPN(["2", "1", "+", "3", "*"])); // ((2 + 1) * 3) = 9
console.log(calculateRPN(["4", "13", "5", "/", "−"])); // (4 - (13 / 5)) = 2
console.log(calculateRPN(["10", "6", "9", "3", "+", "−", "*", "3", "/"])); // ((10 * (6 - (9 + 3))) / 3)= -20
