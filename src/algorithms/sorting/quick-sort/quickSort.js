/** Быстрая сортировка */
function quickSort(array) {
  /** Базовый случай: если массив содержит 0 или 1 элемент, он уже отсортирован */
  if (array.length <= 1) {
    return array;
  }

  /** Выбираем опорный элемент (например, средний элемент) */
  const pivot = array[Math.floor(array.length / 2)];

  /** Элементы меньше опорного */
  const left = [];
  /** Элементы больше опорного */
  const right = [];
  /** Элементы равные опорному */
  const equal = [];

  /** Распределяем элементы по массивам */
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  /** Рекурсивно сортируем левую и правую части, затем объединяем результаты */
  return [...quickSort(left), ...equal, ...quickSort(right)];
}
