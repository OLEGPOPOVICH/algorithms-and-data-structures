/**
 * Поиск максимального и минимального значения
 *
 * Напишите функцию, которая принимает массив чисел и возвращает максимальное и минимальное значение в этом массиве.
 *
 * Input: [3, 1, 4, 1, 5, 9, 2, 6]
 * Output: [9, 1]
 */
const findMaxAndMin = (arr) => {
	if (!arr.length) {
    return [];
	}

	let max = arr[0];
	let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return [max, min];
}

const res = findMaxAndMin([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(res);
