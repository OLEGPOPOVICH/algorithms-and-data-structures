/**
 * Хеш-функция методом сложения
 *
 * m - размер хеш-таблицы
 */
const simpleHash = (key, m = 1e9 + 9) => {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    // charCodeAt - возвращает числовое значение Юникода для символа по указанному индексу
    hash = (hash + key.charCodeAt(i)) % m;
  }

  return hash;
}

module.exports = simpleHash;

// console.log(simpleHash('мошкара', 100)); // 80
// console.log(simpleHash('ромашка', 100)); // 80
