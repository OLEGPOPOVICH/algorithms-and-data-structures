const Queue = require('../queueWithArray');

/**
 * Объединение двух очередей по приоритету
 *
 * Реализуйте функцию, которая принимает две очереди и объединяет их в одну по приоритету.
 *
 * Input: [1, 3, 5], [2, 4, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */
const mergeQueuesByPriority = (queue1, queue2) => {
  const mergedQueue = new Queue();

  while (!queue1.isEmpty() && !queue2.isEmpty()) {
    if (queue1.getFront() <= queue2.getFront()) {
      mergedQueue.enqueue(queue1.dequeue());
    } else {
      mergedQueue.enqueue(queue2.dequeue());
    }
  }

  /** Добавляем оставшиеся элементы из первой очереди */
  while (!queue1.isEmpty()) {
    mergedQueue.enqueue(queue1.dequeue());
  }

  /** Добавляем оставшиеся элементы из второй очереди */
  while (!queue2.isEmpty()) {
    mergedQueue.enqueue(queue2.dequeue());
  }

  return mergedQueue;
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(3);
queue1.enqueue(5);

const queue2 = new Queue();
queue2.enqueue(2);
queue2.enqueue(4);
queue2.enqueue(6);

const mergedQueue = mergeQueuesByPriority(queue1, queue2);
console.log(mergedQueue.items); // [1, 2, 3, 4, 5, 6]
