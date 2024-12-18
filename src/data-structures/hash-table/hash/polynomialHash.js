/**
 * Хеш-функция полиномиальная
 *
 * Использует полином для вычисления хеша ключа
 *
 * Функция обеспечивает хорошее распределение значений, что минимизирует возможные коллизии.
 *
 * @param key - ключ
 * @param p - основание (обычно выбирается простое число, например, 31)
 * @param m - размер хеш-таблицы
 */
const polynomialHash = (key, p = 31, m = 1e9 + 9) => {
  let hash = 0;
  let pPow = 1;

  for (let i = 0; i < key.length; i++) {
    // charCodeAt - возвращает числовое значение Юникода для символа по указанному индексу
    hash = (hash + (key.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * pPow) % m;
    pPow = (pPow * p) % m;
  }

  return hash;
}

module.exports = polynomialHash;

console.log(polynomialHash('мошкара', 31, 100)); // 8
console.log(polynomialHash('ромашка', 31, 100)); // 48
