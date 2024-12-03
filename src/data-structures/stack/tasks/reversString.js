const Stack = require('../stack');

/**
 * Разворот строки
 *
 * Реализуйте функцию, которая возвращает строку в обратном порядке
 *
 * Input: '123456'
 * Output: '654321'
 */
const reverseString = (str) => {
  const stack = new Stack();
  let reversedString = '';

  for (let char of str) {
    stack.push(char);
  }

  while (stack.getSize()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

console.log(reverseString("Hello, World!")); // "!dlroW ,olleH"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("Stack ")); // "kcatS "
