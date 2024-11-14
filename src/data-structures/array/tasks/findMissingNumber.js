/**
 * Найти пропущенное число
 *
 * Дан массив целых чисел от 1 до `n` (где `n` - длина массива + 1), найдите пропущенное число.
 *
 * Input: [1, 2, 3, 5]
 * Output: 4
 */
const findMissingNumber = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] !== 1) {
			return arr[i + 1] - 1;
		}
	}

	return null;
}

const res = findMissingNumber([1, 2, 3, 5]);
console.log(res);