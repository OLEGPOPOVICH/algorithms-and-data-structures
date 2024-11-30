const Queue = require('../queueWithArray');

/**
 * Проверка палиндрома
 *
 * Реализуйте функцию, которая проверяет является ли строка палиндромом.
 *
 * Input: 'A man, a plan, a canal, Panama'
 * Output: true
 */
const isPalindrome = (str) => {
  const queue = new Queue();
  const normalizedStr = str.toLowerCase().replace(/[^a-z]/g, '');

  /** Заполнение очереди */
  for (let char of normalizedStr) {
    queue.enqueue(char);
  }

  /** Сравнение символов */
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    if (queue.dequeue() !== normalizedStr[i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
