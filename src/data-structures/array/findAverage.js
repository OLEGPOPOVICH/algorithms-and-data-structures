/**
 * Найти среднее значение
 *
 * Напишите функцию, которая принимает массив чисел и возвращает среднее значение.
 *
 * Input: [1, 2, 3, 4, 5]
 * Output: 3.0
 */
const findAverage = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum/arr.length || sum;
}

const res = findAverage([]);
console.log(res);