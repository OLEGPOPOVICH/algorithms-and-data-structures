const LinkedList = require('../linkedList');

/**
 * Нахождение середины связанного списка
 *
 * Реализуйте функцию поиска среднего элемента связанного списка (или два средних, если количество элементов четное).
 *
 * Input: Список: 1 → 2 → 3 → 4 → 5 → null | 1 → 2 → 3 → 4 → null
 * Output: [3] | [2, 3]
 */
const findMiddle = (head, size) => {
  if (!head) {
    return [];
  }

  const isEvenList = size % 2 === 0;
  let prevSlowNode = null;
  let slowNode = head;
  let fastNode = head;

  while (fastNode && fastNode.next) {
    if (isEvenList) {
      prevSlowNode = slowNode;
    }

    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  return isEvenList ? [prevSlowNode, slowNode] : [slowNode];
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);

const foundMiddle = findMiddle(list.head, list.size);
console.log("foundMiddle:", foundMiddle);
