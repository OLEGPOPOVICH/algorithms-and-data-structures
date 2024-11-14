/**
 * Проверка на палиндром
 *
 * Напишите функцию, которая проверяет, является ли массив палиндромом (т.е. он читается одинаково с обеих сторон).
 *
 * Input: [1, 2, 3, 2, 1]
 * Output: True
 */
const isPalindrome = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if (arr[left] !== arr[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
}

const res = isPalindrome([1, 2, 3, 2, 1]);
console.log(res);