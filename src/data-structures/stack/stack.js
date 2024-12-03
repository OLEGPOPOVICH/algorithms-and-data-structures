/** Стек (Реализация на массиве) */
class Stack {
  constructor() {
    this.items = [];
  }

  /** Добавляет элемент в стек */
  push(element) {
    this.items.push(element);
  }

  /** Удаляет элемент из стека */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.pop();
  }

  /** Возвращает элемент с вершины стека без его удаления */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  /** Проверяет, пуст ли стек */
  isEmpty() {
    return !this.items.length;
  }

  /** Возвращает размер стека */
  getSize() {
    return this.items.length;
  }

  /** Очищает стек */
  clear() {
    this.items = [];
  }
}

module.exports = Stack;

// const stack = new Stack();
//
// stack.push(10);
// stack.push(20);
// stack.push(30);
//
// console.log(stack.peek()); // 30
// console.log(stack.pop()); // 30
// console.log(stack.getSize()); // 2
// console.log(stack.isEmpty()); // false
//
// stack.clear();
// console.log(stack.isEmpty()); // true
