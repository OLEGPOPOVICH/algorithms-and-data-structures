const DoublyLinkedList = require('../doubly-linked-list/doublyLinkedList');

/** Очередь (Реализация на двусвязном списке) */
class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  /** Добавляет элемент в очередь */
  enqueue(value) {
    this.list.addLast(value);
  }

  /** Удаляет элемент из очереди */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const element = this.list.head;
    this.list.removeFirst();

    return element.value;
  }

  /** Возвращает первый элемент очереди без его удаления */
  getFront() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.head.value;
  }

  /** Проверяет, пуста ли очередь */
  isEmpty() {
    return this.list.isEmpty();
  }

  /** Возвращает размер очереди */
  getSize() {
    return this.list.getSize();
  }

  /** Очищает очередь */
  clear() {
    this.list.clear();
  }
}

module.exports = Queue;

// const queue = new Queue();
//
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
//
// console.log(queue.getFront()); // 10
// console.log(queue.dequeue()); // 10
// console.log(queue.dequeue()); // 20
// console.log(queue.getSize()); // 1
// console.log(queue.isEmpty()); // false
//
// queue.clear();
// console.log(queue.isEmpty()); // true
