const LinkedList = require('../linkedList');

/**
 * Удаление дубликатов из связанного списка
 *
 * Реализуйте функцию, которая удалит все дублирующиеся элементы из связанного списка.
 * Функция должна вернуть входной список без дублирующих элементов.
 *
 * Input: Список: 1 → 2 → 3 → 2 → null
 * Output: Список: 1 → 2 → 3 → null
 */
const removeDuplicates = (list = {}) => {
  const dic = {};

  let prevNode = null;
  let currentNode = list.head;

  while (currentNode) {
    if (dic[currentNode.value]) {
      prevNode.next = currentNode.next;
      list.size--;
    } else {
      dic[currentNode.value] = true;
      prevNode = currentNode;
    }

    currentNode = currentNode.next;
  }
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(2);
list.addLast(4);
list.addLast(1);

console.log("Оригинальный список:");
list.print();

removeDuplicates(list);

console.log("Уникальный список:");
list.print();
