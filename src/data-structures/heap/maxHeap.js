const Heap = require('./heap');

/** Максимальная куча */
class MaxHeap extends Heap {
  /** Просеивает вверх (восстановление свойства кучи после вставки) */
  siftUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  /** Просеивает вниз (восстановление свойства кучи после удаления корня) */
  siftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.siftDown(largest);
    }
  }
}

module.exports = MaxHeap;

// Пример использования
// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(5);
// maxHeap.insert(20);
// maxHeap.insert(3);
//
// console.log(maxHeap.extract()); // 20
// console.log(maxHeap.extract()); // 10
// console.log(maxHeap.extract()); // 5
// console.log(maxHeap.extract()); // 3
