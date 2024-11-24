const LinkedList = require('../linkedList');
const LinkedListNode = require('../LinkedListNode');

/**
 * Копирование связанного списка
 *
 * Реализуйте функцию копирования связанного списка.
 *
 * Input: Список: 1 → 2 → 3 → null
 * Output: Список копия: 1 → 2 → 3 → null
 */
const copyLinkedList = (head) => {
  if (!head) {
    return null;
  }

  const copyList = new LinkedList();
  const temporaryNode = new LinkedListNode(null);

  let currentCopyNode = temporaryNode;
  let currentNode = head;

  while (currentNode) {
    const newNode = new LinkedListNode(currentNode.value);

    currentCopyNode.next = newNode;
    currentCopyNode = newNode;

    currentNode = currentNode.next;
    copyList.size++;
  }

  copyList.head = temporaryNode.next;

  return copyList;
}

const list = new LinkedList();
list.addLast(1);
list.addLast(3);
list.addLast(5);

const copyList = copyLinkedList(list.head);
copyList.print();
