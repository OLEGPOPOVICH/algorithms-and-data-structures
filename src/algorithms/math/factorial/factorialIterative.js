/** Итеративная реализация факториала */
function factorialIterative(value) {
  let result = 1;

  for (let i = 1; i <= value; i++) {
    result *= i;
  }

  return result;
}
