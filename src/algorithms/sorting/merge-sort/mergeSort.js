/** Сортировка слиянием */
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  /** Разделяем массив на две половины */
  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  /** Рекурсивно сортируем каждую половину */
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  /** Сливаем отсортированные половины */
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  /** Указатель для левой части */
  let i = 0;
  /** Указатель для правой части */
  let j = 0;

  /** Сравниваем элементы из левой и правой частей */
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  /** Добавляем оставшиеся элементы из левой части */
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  /** Добавляем оставшиеся элементы из правой части */
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
