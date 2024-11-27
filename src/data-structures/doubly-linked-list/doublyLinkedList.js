const DoublyLinkedListNode = require('./doublyLinkedListNode');

/** Двусвязный список */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** Добавляет узел в начала */
  addFirst(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /** Добавляет узел в конец */
  addLast(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /** Добавляет узел после определенного значения узла */
  addAfterValue(value, afterValue) {
    if (!(value && afterValue)) {
      return;
    }

    const foundNode = this.find(afterValue)

    if (!foundNode) {
      return;
    }

    const newNode = new DoublyLinkedListNode(value);

    if (foundNode.next) {
      newNode.next = foundNode.next;
      newNode.prev = foundNode;

      foundNode.next.prev = newNode;
      foundNode.next = newNode;
    } else {
      this.tail = newNode;

      newNode.prev = foundNode;
      foundNode.next = newNode;
    }

    this.size++;
  }

  /** Добавляет узел перед определенным значением узла */
  addBeforeValue(value, beforeValue) {
    if (!(value && beforeValue)) {
      return;
    }

    const foundNode = this.find(beforeValue)

    if (!foundNode) {
      return;
    }

    const newNode = new DoublyLinkedListNode(value);

    if (foundNode.prev) {
      newNode.next = foundNode;
      newNode.prev = foundNode.prev;

      foundNode.prev.next = newNode;
      foundNode.prev = newNode;
    } else {
      this.head = newNode;

      newNode.next = foundNode;
      foundNode.prev = newNode;
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
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;
  }

  /** Удаляет последний узел */
  removeLast() {
    if (!this.tail) {
      return;
    }

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;
  }

  /** Удаляет узел с заданным значением */
  remove(value) {
    const foundNode = this.find(value);

    if (!foundNode) {
      return;
    }

    if (foundNode.next) {
      foundNode.next.prev = foundNode.prev;
    } else {
      this.tail = foundNode.prev;
    }

    if (foundNode.prev) {
      foundNode.prev.next = foundNode.next;
    } else {
      this.head = foundNode.next;
    }

    this.size--;
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

      while (currentNode && currentNode.next) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }

      console.log(`TAIL: ${this.tail.value}`);
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

module.exports = DoublyLinkedList;

// const list = new DoublyLinkedList();
// list.addLast(15);
// list.addLast(25);
// list.addLast(35);
//
// list.addFirst(10);
// list.addFirst(5);
//
// const node = list.find(25);
// console.log('foundNode', node.value);
//
// list.addBeforeValue(20, 25);
// list.addAfterValue(30, 25);
//
// list.print();
//
// list.removeFirst();
// list.removeLast();
// list.remove(20);
//
// console.log(list);
//
// list.print();
