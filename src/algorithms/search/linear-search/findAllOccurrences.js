/** Линейного поиска с выводом всех совпадений  */
function findAllOccurrences(array, target) {
  const indices = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      indices.push(i);
    }
  }

  return indices;
}
