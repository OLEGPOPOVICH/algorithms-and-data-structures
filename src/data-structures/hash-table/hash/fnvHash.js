/**
 * Хеш-функция FNV (Fowler–Noll–Vo)
 *
 * Функция устанавливает начальное значение и использует специальные операции умножения и XOR.
 *
 * Функция демонстрирует хорошее распределение, простоту реализации и отличные характеристики производительности.
 *
 * @param key - ключ
 * @param m - размер хеш-таблицы
 */
const fnvHash = (key, m = 1e9 + 9) => {
  /** Множитель FNV */
  const FNV_PRIME = 16777619;
  let hash = 0

  for (let i = 0; i < key.length; i++) {
    // charCodeAt - возвращает числовое значение Юникода для символа по указанному индексу
    hash ^= key.charCodeAt(i);
    hash *= FNV_PRIME;
  }

  return hash % m;
}

module.exports = fnvHash;

console.log(fnvHash('мошкара', 100)); // 48
console.log(fnvHash('ромашка', 100)); // 4
