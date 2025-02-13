/** Куча */
class Heap {
  constructor(array = []) {
    this.heap = array;
    this.buildHeap();
  }

  /** Строит кучу из массива */
  buildHeap() {
    const lastParentIndex = this.getParentIndex(this.heap.length - 1);

    for (let i = lastParentIndex; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  /** Получает индекс родительского узла */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /** Получает индекс левого дочернего узла */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /** Получает индекс правого дочернего узла */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /** Меняет местами элементы в куче */
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  /** Получает корневой элемент без удаления */
  peek() {
    if (this.heap.length === 0) {
      throw new Error("Куча пуста");
    }

    return this.heap[0];
  }

  /** Извлекает корневой элемент */
  extract() {
    const rootElement = this.peek();
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.siftDown(0);
    }

    return rootElement;
  }

  /** Вставляет элемент в кучу */
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  /** Получает размер списка */
  size() {
    return this.heap.length;
  }

  /** Проверяет на пустоту */
  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = Heap;
