const LinkedList = require('../linkedList');

/**
 * Проверка палиндрома
 *
 * Реализуйте функцию, которая проверяет является ли связанный список палиндромом.
 *
 * Input: Список: a → b → b → a → null
 * Output: true
 */
const isPalindrome = (list) => {
  if (!(list && list.head)) {
    return false;
  }

  const stack = [];
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    const stackValue = stack.pop();

    if (slow.value !== stackValue) {
      return false;
    }

    slow = slow.next;
  }

  return true;
}

const list = new LinkedList();
list.addLast('a');
list.addLast('b');
list.addLast('b');
list.addLast('a');

console.log("isPalindrome:", isPalindrome(list));
