# Сортировка вставками

Алгоритм сортировки, который строит отсортированную часть массива постепенно, вставляя каждый новый элемент на правильное место.

## Принцип работы

1. Начинаем сортировку со второго элемента массива;
2. Сравниваем этот элемент с элементами в отсортированной части (слева от текущего элемента);
3. Если текущий элемент меньше предыдущего, меняем их местами;
4. Повторяйте шаг 3, пока не найдете правильную позицию для текущего элемента;
5. Переходим к следующему элементу и повторяем шаги 2–5, пока весь массив не будет отсортирован.

## Временная сложность

- В худшем случае: O(n <sup>2</sup>), когда массив отсортирован в обратном порядке;
- В лучшем случае: O(n), когда массив уже отсортирован;
- Средняя сложность: O(n <sup>2</sup>).

## Пространственная сложность

- O(1), так как сортировка выполняется на месте.

## Преимущества

- Простота реализации;
- Эффективен для небольших массивов;
- Хорошо работает для почти упорядоченных данных;
- Минимальное количество обменов элементов.

## Недостатки

- Низкая производительность на больших массивах;
- Неэффективен для задач с большими объемами данных.

## Задачки

1. [Реализовать сортировку вставками](insertionSort.js)

## Ресурсы

- [Alek OS (7:00-9:12)](https://www.youtube.com/watch?v=PF7AqefS4MU&t=129s)
- [JavaRush (26:14-30:10)](https://www.youtube.com/watch?v=D1u3H9_wmUU&list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5&index=8)
- [Визуализация](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)