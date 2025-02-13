const MinHeap = require('../minHeap');

class PriorityQueue {
  constructor(heap) {
    this.heap = heap;
  }

  /** Добавляет элемент в очередь */
  enqueue(value) {
    this.heap.insert(value);
  }

  //
  /** Извлекает элемент с наивысшим приоритетом */
  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap.extract();
  }
}

module.exports = PriorityQueue;

// Пример использования
// const pq = new PriorityQueue(new MinHeap());
// pq.enqueue(10);
// pq.enqueue(5);
// pq.enqueue(20);
// pq.enqueue(1);
//
// console.log(pq.dequeue()); // 1
// console.log(pq.dequeue()); // 5
// console.log(pq.dequeue()); // 10
// console.log(pq.dequeue()); // 20
