/**
 * Найти два числа, сумма которых равна заданному значению
 *
 * Напишите функцию, которая принимает массив чисел и число `target`, и возвращает индексы двух чисел, которые в сумме дают `target`.
 *
 * Input: [2, 7, 11, 15], 9
 * Output: [0, 1]
 */
const findTwoSum = (arr, target) => {
	const numMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		const residue = target - arr[i];

		if (numMap.has(residue)) {
			return [numMap.get(residue), i];
		}

		numMap.set(arr[i], i);
	}

	return [];
}

const res = findTwoSum([2, 7, 11, 15], 9);
console.log(res);