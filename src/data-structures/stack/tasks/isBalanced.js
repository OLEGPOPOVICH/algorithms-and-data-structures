const Stack = require('../stack');

/**
 * Проверка сбалансированных скобок
 *
 * Реализуйте функцию, которая проверяет являются ли скобки в строке сбалансированными.
 * Сбалансированными считаются скобки, которые правильно открыты и закрыты.
 *
 * Input: '{[()]}'
 * Output: true
 */
const isBalanced = (str) => {
  const stack = new Stack();
  const matchingBrackets = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const openBracket = matchingBrackets[str[i]];

    if (openBracket && openBracket !== stack.pop()) {
      return false;
    }

    if (!openBracket) {
      stack.push(str[i]);
    }
  }

  return true;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("((()))")); // true
console.log(isBalanced("(()")); // false
console.log(isBalanced("{[()]]")); // true
