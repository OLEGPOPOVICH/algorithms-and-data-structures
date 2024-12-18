const simpleHash = require('../../hash/simpleHash.js')

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * Хеш-таблица
 *
 * Реализация хеш-таблицы с решением коллизии методом цепочек
 */
class HashTable {
  constructor(size = 53, hashFn) {
    this.size = size;
    this.getHash = hashFn;
    this.table = new Array(this.size);
  }

  /** Устанавливает значение в хеш-таблицу */
  set(key, value) {
    const index = this.getHash(key, this.size);
    const newNode = new Node(key, value);

    if (!this.table[index]) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];

      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }

        if (!current.next) {
          break;
        }

        current = current.next;
      }

      current.next = newNode;
    }
  }

  /** Возвращает значение из хеш-таблицы */
  get(key) {
    const index = this.getHash(key, this.size);
    let current = this.table[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }

      current = current.next;
    }

    return null;
  }

  /** Удаляет значение из хеш-таблицы */
  delete(key) {
    const index = this.getHash(key, this.size);
    let current = this.table[index];
    let previous = null;

    while (current) {
      if (current.key === key) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.table[index] = current.next;
        }

        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }
}

const hashTable = new HashTable(53, simpleHash);
hashTable.set('name', 'Oleg');
hashTable.set('age', 33);
hashTable.set('city', 'Saint Petersburg');
hashTable.set('cat', 'Timon');
hashTable.set('ega', 6);

hashTable.delete('ega');

console.log(hashTable);
