/** Сортировка вставками */
function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let sorted = i - 1;

    while (sorted > -1 && array[sorted] > array[sorted + 1]) {
      const temp = array[sorted];
      array[sorted] = array[sorted + 1];
      array[sorted + 1] = temp;
      sorted--;
    }
  }

  return array;
}
