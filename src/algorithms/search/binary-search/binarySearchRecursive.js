/** Рекурсивная реализация бинарного поиска */
function binarySearchRecursive(array, target, left = 0, right = array.length - 1) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (array[middle] === target) {
    return middle;
  }

  if (array[middle] < target) {
    return binarySearchRecursive(array, target, middle + 1, right);
  }

  return binarySearchRecursive(array, target, left, middle - 1);
}
