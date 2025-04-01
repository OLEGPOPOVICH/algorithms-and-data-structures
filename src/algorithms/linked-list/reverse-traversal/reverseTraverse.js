const LinkedList = require('../../../data-structures/linked-list/linkedList');
const DoublyLinkedList = require('../../../data-structures/doubly-linked-list/doublyLinkedList');

/** Обратный обход */
LinkedList.prototype.reverseTraverse = function () {
  /** Создаем пустой стек */
  const stack = [];
  let current = this.head;

  /** Проходим по списку и добавляем данные в стек */
  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  /** Извлекаем данные из стека (обратный порядок) */
  while (stack.length > 0) {
    console.log(stack.pop());
  }
}

/** Обратный обход */
DoublyLinkedList.prototype.reverseTraverse = function () {
  let current = this.tail;

  while (current) {
    console.log(current.value);
    current = current.prev;
  }
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.reverseTraverse();

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addLast(1);
doublyLinkedList.addLast(2);
doublyLinkedList.addLast(3);
doublyLinkedList.reverseTraverse();
