/**
 * Хеш-функция с использованием множителя Кнута
 *
 * Функция обеспечивает хорошее распределение значений, что минимизирует возможные коллизии.
 *
 * @param key - ключ
 * @param m - размер хеш-таблицы
 */
const knuthHash = (key, m = 1e9 + 9) => {
  const knuthMultiplier = 31;
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    // charCodeAt - возвращает числовое значение Юникода для символа по указанному индексу
    hash = (hash * knuthMultiplier + key.charCodeAt(i)) % m;
  }

  return hash;
}

module.exports = knuthHash;

console.log(knuthHash('мошкара', 7)); // 0
console.log(knuthHash('ромашка', 7)); // 3
