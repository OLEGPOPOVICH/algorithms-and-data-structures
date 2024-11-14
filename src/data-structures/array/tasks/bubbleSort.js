/**
 * Сортировка массива методом пузырька
 *
 * Реализуйте функцию сортировки массива методом пузырька.
 *
 * Input: [100, 64, 34, 25, 12, 22, 11, 90]
 * Output: [11, 12, 22, 25, 34, 64, 90, 100]
 */
const bubbleSort = (arr) => {
	let n = arr.length;
	let swapped = false;

	do {
		swapped = false;

		for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}

		n--;
	} while (swapped);

	return arr;
}

const res = bubbleSort([80, 64, 34, 25, 100, 12, 22, 11, 90]);
console.log(res);