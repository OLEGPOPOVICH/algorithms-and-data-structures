# Подход двойного хеширования

Подход решает коллизии путём использования второй хеш-функции для определения шага, который будет применён для поиска следующей ячейки в массиве.
Вместо того чтобы проверять следующий индекс напрямую, этот подход использует уравнение:

`newIndex = (index + i * indexTwo) mod size `

где
- index - значение от первой хеш-функции;
- i - номер попытки (1, 2, ...);
- indexTwo — значение от второй хеш-функции;
- size размер хеш-таблицы.

[Реализация хеш-таблицы](hashTable.js)