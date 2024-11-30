/** Очередь (Реализация на массиве) */
class Queue {
  constructor() {
    this.items = [];
  }

  /** Добавляет элемент в очередь */
  enqueue(element) {
    this.items.push(element);
  }

  /** Удаляет элемент из очереди */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.shift();
  }

  /** Возвращает первый элемент очереди без его удаления */
  getFront() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[0];
  }

  /** Проверяет, пуста ли очередь */
  isEmpty() {
    return !this.items.length;
  }

  /** Возвращает размер очереди */
  getSize() {
    return this.items.length;
  }

  /** Очищает очередь */
  clear() {
    this.items = [];
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
