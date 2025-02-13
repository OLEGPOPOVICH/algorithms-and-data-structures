const Heap = require('./heap');

class MinHeap extends Heap {
  /** Просеивает вверх (восстановление свойства кучи после вставки) */
  siftUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  /** Просеивает вниз (восстановление свойства кучи после удаления корня) */
  siftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }
}

module.exports = MinHeap;

// Пример использования
// const array = [10, 5, 20, 3, 7, 15];
// const minHeap = new MinHeap(array); // [ 3, 5, 15, 10, 7, 20 ]
//
// minHeap.insert(25); // [ 3, 5, 15, 10, 7, 20, 25 ]
//
// console.log(minHeap.extract()); // 3
