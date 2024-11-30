const Queue = require('../queueWithArray');

/**
 * Разворот элементов в очереди
 *
 * Реализуйте функцию, которая принимает очередь и возвращает новую очередь, где элементы расставлены в обратном порядке.
 *
 * Input: [1, 2, 3, 4]
 * Output: [4, 3, 2, 1]
 */
const reverseQueue = (queue) => {
  const stack = [];

  /** Перемещение элементов из очереди в стек */
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  /** Перемещение элементов из стека обратно в очередь */
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.items); // [1, 2, 3, 4]
reverseQueue(queue);
console.log(queue.items); // [4, 3, 2, 1]
