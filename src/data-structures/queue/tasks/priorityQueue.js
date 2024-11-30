class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/** Очередь с приоритетом (Реализация на массиве)*/
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  /** Добавляет значение в очередь с приоритетом */
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    let addedNode = false;

    for (let i = 0; i < this.items.length; i++) {
      if (newNode.priority < this.items[i].priority) {
        this.items.splice(i, 0, newNode);
        addedNode = true;
        break;
      }
    }

    /** Если элемент с более высоким приоритетом не найден, добавляем его в конец */
    if (!addedNode) {
      this.items.push(newNode);
    }
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(2, 2);
priorityQueue.enqueue(3, 3);
priorityQueue.enqueue(1, 1);
priorityQueue.enqueue(4, 4);

console.log(priorityQueue.items);
