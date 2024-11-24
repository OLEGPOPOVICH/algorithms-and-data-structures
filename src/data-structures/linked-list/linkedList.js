const LinkedListNode = require('./linkedListNode');

/** Связный список */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /** Добавляет узел в начала */
  addFirst(value) {
    const newNode = new LinkedListNode(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }

    this.size++;
  }

  /** Добавляет узел в конец */
  addLast(value) {
    const newNode = new LinkedListNode(value);

    if (this.head) {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    } else {
      this.head = newNode;
    }

    this.size++;
  }

  /** Удаляет первый узел */
  removeFirst() {
    if (!this.head) {
      return;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }

    this.size--;
  }

  /** Удаляет последний узел */
  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.head.next) {
      let currentNode = this.head;

      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
    } else {
      this.head = null;
    }

    this.size--;
  }

  /** Удаляет узел с заданным значением */
  remove(value) {
    if (!value || !this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  /** Ищет узел по значению */
  find(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /** Выводит значения */
  print() {
    if (this.head) {
      console.log(`HEAD: ${this.head.value}`);

      let currentNode = this.head.next;

      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  /** Проверяет на пустоту */
  isEmpty() {
    return !this.size;
  }

  /** Получает размер списка */
  getSize() {
    return this.size;
  }

  /** Очищает список */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

module.exports = LinkedList;

// const list = new LinkedList();
// list.addLast(15);
// list.addLast(25);
// list.addLast(35);
// list.addLast(45);
//
// list.addFirst(10);
// list.addFirst(5);
//
// const node = list.find(25);
// console.log('foundNode', node.value);
//
// list.print();
//
// list.removeFirst();
// list.removeLast();
// list.remove(45);
//
// console.log(list);
//
// list.print();
