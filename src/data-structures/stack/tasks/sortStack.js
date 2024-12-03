const Stack = require('../stack');

/**
 * Сортировка с использованием стека
 *
 * Реализуйте функцию, которая сортирует стек
 *
 * Input: [34, 3, 31, 98, 92, 23]
 * Output: [3, 23, 31, 34, 92, 98]
 */
const sortStack = (stack) => {
  const tempStack = new Stack();

  while (stack.length > 0) {
    const currentStack = stack.pop();

    while (tempStack.getSize() && tempStack.peek() < currentStack) {
      stack.push(tempStack.pop());
    }

    tempStack.push(currentStack);
  }

  while (tempStack.getSize()) {
    stack.push(tempStack.pop());
  }

  return stack;
}

const stack = [34, 3, 31, 98, 92, 23];
console.log(sortStack(stack)); // [3, 23, 31, 34, 92, 98]
