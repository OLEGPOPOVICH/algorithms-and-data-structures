# Подход квадратичный

Подход решает коллизии путём поиска свободной ячейки в массиве с использованием квадратичной зависимости.
Вместо того чтобы проверять следующий индекс напрямую, этот подход использует уравнение:

`newIndex = (index + i * i) mod size`

где
- index - значение, полученное из хеш-функции;
- i - номер попытки (1, 2, ...);
- size - размер хеш-таблицы.

[Реализация хеш-таблицы](hashTable.js)