/** Сортировка пузырьком */
function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}
