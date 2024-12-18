const simpleHash = require('../../../hash/simpleHash.js')

/**
 * Хеш-таблица
 *
 * Реализация хеш-таблицы с решением коллизии методом открытой адресацией с линейным подходом
 */
class HashTable {
  constructor(size = 53, hashFn) {
    this.size = size;
    this.getHash = hashFn;
    this.table = new Array(this.size);
    this.count = 0;
  }

  /** Устанавливает значение в хеш-таблицу */
  set(key, value) {
    const index = this.getHash(key, this.size);
    let currentIndex = index;

    while (this.table[currentIndex]) {
      if (this.table[currentIndex][0] === key) {
        this.table[currentIndex][1] = value;
        return;
      }

      currentIndex = (currentIndex + 1) % this.size;
    }

    this.table[currentIndex] = [key, value];
    this.count++;

    /** Проверка на перегрузку (например, при количестве элементов > 70% от размера хеш-таблицы) */
    if (this.count / this.size > 0.7) {
      this._resize();
    }
  }

  /** Возвращает значение из хеш-таблицы */
  get(key) {
    const index = this.getHash(key, this.size);
    let currentIndex = index;

    while (this.table[currentIndex] !== undefined) {
      if (this.table[currentIndex] && this.table[currentIndex][0] === key) {
        return this.table[currentIndex][1];
      }

      currentIndex = (currentIndex + 1) % this.size;
    }

    return null;
  }

  /** Удаляет значение из хеш-таблицы */
  delete(key) {
    const index = this.getHash(key, this.size);
    let currentIndex = index;

    while (this.table[currentIndex] !== undefined) {
      if (this.table[currentIndex] && this.table[currentIndex][0] === key) {
        this.table[currentIndex] = null;
        this.count--;
        return true;
      }

      currentIndex = (currentIndex + 1) % this.size;
    }

    return false;
  }

  /** Изменяет размер хеш-таблицы */
  _resize() {
    const newSize = this.size * 2;
    const newTable = new Array(newSize);
    const oldTable = this.table;

    this.size = newSize;
    this.table = newTable;
    this.count = 0;

    for (const item of oldTable) {
      if (item) {
        this.set(item[0], item[1]);
      }
    }
  }
}

const hashTable = new HashTable(9, simpleHash);
hashTable.set('name', 'Oleg');
hashTable.set('age', 33);
hashTable.set('city', 'Saint Petersburg');
hashTable.set('cat', 'Timon');
hashTable.set('ega', 6);
hashTable.set('gea', 8);

hashTable.delete('ega');
hashTable.delete('gea');

console.log(hashTable);
