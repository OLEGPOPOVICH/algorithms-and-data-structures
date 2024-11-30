const Queue = require('../queueWithArray');

/**
 * Объединение двух очередей
 *
 * Реализуйте функцию, которая принимает две очереди и объединяет их в одну, сохраняя порядок элементов.
 *
 * Input: [1, 2, 3], [4, 5, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */
const mergeQueues = (queue1, queue2) => {
  const mergedQueue = new Queue();

  /** Объединение первой очереди */
  while (!queue1.isEmpty()) {
    mergedQueue.enqueue(queue1.dequeue());
  }

  /** Объединение второй очереди */
  while (!queue2.isEmpty()) {
    mergedQueue.enqueue(queue2.dequeue());
  }

  return mergedQueue;
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

const queue2 = new Queue();
queue2.enqueue(4);
queue2.enqueue(5);
queue2.enqueue(6);

const mergedQueue = mergeQueues(queue1, queue2);
console.log(mergedQueue.items); // [1, 2, 3, 4, 5, 6]
