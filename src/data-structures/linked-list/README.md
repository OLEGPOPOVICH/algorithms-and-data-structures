# Связный список (Linked List)

Структура данных, состоящая из узлов, где каждый предыдущий узел хранит значение и ссылку на следующий узел.

## Структура

- Каждый отдельно взятый элемент списка занимает отдельное место в памяти;
- Элементы располагаются в памяти в разброс;
- Не имеет фиксированной длины;
- Каждый элемент хранит ссылку на следующий узел;
- Для взаимодействия со списком есть указатели на начало (HEAD).

## Преимущества списка

- Вставка узла в начала списка выполняется за O(1);
- Удаление узла из начала списка выполняется за O(1).

## Недостатки списка

- Каждый узел требует дополнительной памяти для хранения указателей;
- Доступ к узлу выполняется последовательно за O(n);
- Вставка узла в конец выполняется за O(n);
- Удаление произвольного узла выполняется за O(n);
- Поиск узла осуществляется за O(n).

## Сложности операций

| Получение | Поиск | Вставка | Удаление | Вставка/Удаление (начала) |
|:---------:|:-----:|:-------:|:--------:|:-------------------------:|
|     n     |   n   |    n    |    n     |             1             |

## Задачки
1. [Реализовать узел связного списка](linkedListNode.js)
2. [Реализовать связный список](linkedList.js)
3. [Объединение двух отсортированных связанных списков](tasks/mergeTwoLists.js)
4. [Удаление дубликатов из связанного списка](tasks/removeDuplicates.js)
5. [Копирование связанного списка](tasks/copyLinkedList.js)
6. [Нахождение середины связанного списка](tasks/findMiddle.js)
7. [Проверка палиндрома](tasks/isPalindrome.js)
8. [Разворот связанного списка](tasks/reverseList.js)

# ``Методы списка``

## Добавляет узел в начала

```javascript
addFirst(value) {
  const newNode = new Node(value);

  if (this.head) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    this.head = newNode;
  }

  this.size++;
}
```

## Добавляет узел в конец

```javascript
addLast(value) {
  const newNode = new Node(value);

  if (this.head) {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  } else {
    this.head = newNode;
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
  } else {
    this.head = null;
  }

  this.size--;
}
```

## Удаляет последний узел

```javascript
removeLast() {
  if (!this.head) {
    return;
  }

  if (this.head.next) {
    let currentNode = this.head;

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  } else {
    this.head = null;
  }

  this.size--;
}
```

## Удаляет узел с заданным значением

```javascript
remove(value) {
  if (!value || !this.head) {
    return;
  }

  if (this.head.value === value) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let current = this.head;

  while (current.next && current.next.value !== value) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
    this.size--;
  }
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

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
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
- [SOER о списках (6:00)](https://youtu.be/7qBzavJA00E?si=n9712Dakv_6xF4aT)