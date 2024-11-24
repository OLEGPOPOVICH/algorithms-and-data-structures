const LinkedList = require('../linkedList');

/**
 * Разворот связанного списка
 *
 * Реализуйте функцию, которая вернет перевернутый связанный список.
 *
 * Input: Список: 1 → 2 → 3 → 4 → null
 * Output: Список: 4 → 3 → 2 → 1 → null
 */
const reverseList = (head) => {
  if (!head) {
    return null;
  }

  let reversed = null;

  while (head) {
    const nextNode = head.next;

    head.next = reversed;
    reversed = head;

    head = nextNode;
  }

  return reversed;
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);

const reversedList = reverseList(list.head);
list.head = reversedList;

list.print();
