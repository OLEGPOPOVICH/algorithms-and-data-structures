/** Рекурсивная реализация фибоначчи */
function fibonacciRecursive(value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return fibonacciRecursive(value - 1) + fibonacciRecursive(value - 2);
}
