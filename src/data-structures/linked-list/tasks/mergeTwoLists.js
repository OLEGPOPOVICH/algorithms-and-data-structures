const LinkedList = require('../linkedList');
const LinkedListNode = require("../linkedListNode");

/**
 * Объединение двух отсортированных связанных списков
 *
 * Реализуйте функцию объединения двух отсортированных связанных списков.
 * Функция должна вернуть новый отсортированный список в порядке возрастания.
 *
 * Input:
 *    Список 1: 1 → 3 → 5 → 6 → null
 *    Список 2: 2 → 4 → 7 → 8 → null
 * Output: Список: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → null
 */
const mergeTwoLists = (list1 = {}, list2 = {}) => {
  const mergedList = new LinkedList();
  const temporaryNode = new LinkedListNode(null);

  let mergeNode = temporaryNode;
  let nodeList1 = list1.head;
  let nodeList2 = list2.head;

  while (nodeList1 && nodeList2) {
    if (nodeList1.value < nodeList2.value) {
      mergeNode.next = nodeList1;
      nodeList1 = nodeList1.next;
    } else  {
      mergeNode.next = nodeList2;
      nodeList2 = nodeList2.next;
    }

    mergeNode = mergeNode.next;
  }

  if (nodeList1) {
    mergeNode.next = nodeList1;
  }

  if (nodeList2) {
    mergeNode.next = nodeList2;
  }

  mergedList.head = temporaryNode.next;
  mergedList.size = list1.size + list2.size;

  return mergedList;
}

const list1 = new LinkedList();
list1.addLast(1);
list1.addLast(3);
list1.addLast(5);
list1.addLast(6);

const list2 = new LinkedList();
list2.addLast(2);
list2.addLast(4);
list2.addLast(7);
list2.addLast(8);

const mergeList = mergeTwoLists(list1, list2);
mergeList.print();
