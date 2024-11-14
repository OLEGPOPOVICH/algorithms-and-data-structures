/**
 * Найти пару чисел с заданной суммой
 *
 * Напишите функцию, которая находит все уникальные пары чисел в массиве, которые в сумме дают заданное число.
 *
 * Input: [1, 2, 3, 4, 5], S = 6
 * Output: [[1, 5], [2, 4]]
 */
const findAllUniquePairs = (arr, targetSum) => {
	/** Хранилище для уникальных чисел */
	const uniqueNumbers = new Set();
	/** Хранилище для уникальных пар */
	const uniquePairs = new Set();

	for (let i = 0; i < arr.length; i++) {
		const complement = targetSum - arr[i];

		/** Если complement найден, добавляем пару в для хранения */
		if (uniqueNumbers.has(complement)) {
			const pair = [Math.min(arr[i], complement), Math.max(arr[i], complement)];
			uniquePairs.add(pair.toString());
		}

		uniqueNumbers.add(arr[i]);
	}

	/** Преобразуем набор пар обратно в массив */
	return Array.from(uniquePairs).map((pair) => pair.split(',').map(Number));
}

const res = findAllUniquePairs([1, 2, 3, 4, 5], 6);
console.log(res);