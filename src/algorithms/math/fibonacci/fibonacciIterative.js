/** Итеративная реализация фибоначчи */
function fibonacciIterative(value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= value ; i++) {
    let next = prev + curr;

    prev = curr;
    curr = next;
  }

  return curr;
}
