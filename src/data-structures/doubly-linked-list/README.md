# Двусвязный список (Doubly Linked List)

Структура данных, состоящая из узлов, где каждый узел хранит значение и ссылки на предыдущий и следующий узлы.

Это позволяет легко перемещаться как вперед, так и назад по списку.

## Структура

- Каждый отдельно взятый элемент списка занимает отдельное место в памяти;
- Элементы располагаются в памяти в разброс;
- Не имеет фиксированной длины;
- Каждый элемент хранит ссылку на предыдущий и следующий узлы;
- Для взаимодействия со списком есть указатели на начало (HEAD) и на конец (TAIL) списка.

## Преимущества списка

- Вставка узла в начала/конец списка выполняется за O(1);
- Удаление узла из начала/конца списка выполняется за O(1).

## Недостатки списка

- Каждый узел требует дополнительной памяти для хранения указателей;
- Доступ к узлу выполняется последовательно за O(n);
- Вставка узла в произвольное место выполняется за O(n);
- Удаление произвольного узла выполняется за O(n);
- Поиск узла осуществляется за O(n).

## Сложности операций

| Получение | Поиск | Вставка | Удаление | Вставка/Удаление (начала/конец) |
|:---------:|:-----:|:-------:|:--------:|:-------------------------------:|
|     n     |   n   |    n    |    n     |                1                |

## Задачки
1. [Реализовать узел двусвязного списока](doublyLinkedListNode.js)
2. [Реализовать двусвязный список](doublyLinkedList.js)
3. [Объединение двух отсортированных двусвязных списков](tasks/mergeTwoLists.js)
4. [Удаление дубликатов из двусвязного списка](tasks/removeDuplicates.js)

# ``Методы списка``

## Добавляет узел в начала

```javascript
addFirst(value) {
  const newNode = new Node(value);

  if (this.head) {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }

  this.size++;
}
```

## Добавляет узел в конец

```javascript
addLast(value) {
  const newNode = new Node(value);

  if (this.tail) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }

  this.size++;
}
```

## Добавляет узел после определенного значения узла

```javascript
addAfterValue(value, afterValue) {
  if (!(value && afterValue)) {
    return;
  }

  const foundNode = this.find(afterValue)

  if (!foundNode) {
    return;
  }

  const newNode = new Node(value);

  if (foundNode.next) {
    newNode.next = foundNode.next;
    newNode.prev = foundNode;

    foundNode.next.prev = newNode;
    foundNode.next = newNode;
  } else {
    this.tail = newNode;

    newNode.prev = foundNode;
    foundNode.next = newNode;
  }

  this.size++;
}
```

## Добавляет узел перед определенным значением узла

```javascript
addBeforeValue(value, beforeValue) {
  if (!(value && beforeValue)) {
    return;
  }

  const foundNode = this.find(beforeValue)

  if (!foundNode) {
    return;
  }

  const newNode = new Node(value);

  if (foundNode.prev) {
    newNode.next = foundNode;
    newNode.prev = foundNode.prev;

    foundNode.prev.next = newNode;
    foundNode.prev = newNode;
  } else {
    this.head = newNode;

    newNode.next = foundNode;
    foundNode.prev = newNode;
  }

  this.size++;
}
```

## Удаляет первый узел

```javascript
removeFirst() {
  if (!this.head) {
    return;
  }

  if (this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    this.head = null;
    this.tail = null;
  }

  this.size--;
}
```

## Удаляет последний узел

```javascript
removeLast() {
  if (!this.tail) {
    return;
  }

  if (this.tail.prev) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    this.head = null;
    this.tail = null;
  }

  this.size--;
}
```

## Удаляет узел с заданным значением

```javascript
remove(value) {
  const foundNode = this.find(value);

  if (!foundNode) {
    return;
  }

  if (foundNode.next) {
    foundNode.next.prev = foundNode.prev;
  } else {
    this.tail = foundNode.prev;
  }

  if (foundNode.prev) {
    foundNode.prev.next = foundNode.next;
  } else {
    this.head = foundNode.next;
  }

  this.size--;
}
```

## Ищет узел по значению

```javascript
find(value) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}
```

## Выводит значения

```javascript
print() {
  if (this.head) {
    console.log(`HEAD: ${this.head.value}`);

    let currentNode = this.head.next;

    while (currentNode && currentNode.next) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(`TAIL: ${this.tail.value}`);
  }
}
```

## Проверяет на пустоту

```javascript
isEmpty() {
  return !this.size;
}
```

## Получает размер списка

```javascript
getSize() {
  return this.size;
}
```

## Очищает список

```javascript
clear() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}
```

## Ресурсы
- [Alek OS о списках (8:40)](https://youtu.be/47_LhSf-ago?si=YU_ma_q63EpT78fe)
- [SOER о списках (9:10)](https://youtu.be/7qBzavJA00E?si=n9712Dakv_6xF4aT)
