const DoublyLinkedList = require('../doublyLinkedList');

/**
 * Удаление дубликатов из двусвязного списка
 *
 * Реализуйте функцию, которая удалит все дублирующиеся элементы из двусвязного списка.
 * Функция должна вернуть входной список без дублирующих элементов.
 *
 * Input: Список: 1 → 2 → 3 → 2 → 4 → 1 →null
 * Output: Список: 1 → 2 → 3 → 4 → null
 */
const removeDuplicates = (list = {}) => {
  const dic = {};
  let currentNode = list.head;

  while (currentNode) {
    if (dic[currentNode.value]) {
      currentNode.prev.next = currentNode.next;

      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev;
      } else {
        list.tail = currentNode.prev;
      }

      list.size--;
    } else {
      dic[currentNode.value] = true;
    }

    currentNode = currentNode.next;
  }
}

const list = new DoublyLinkedList();
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
