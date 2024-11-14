/**
 * Разворот массива
 *
 * Напишите функцию, которая разворачивает массив, т.е. делает последний элемент первым, предпоследний — вторым и так далее.
 *
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 */
const reverse = (arr) => {
	const reversedArray = [...arr];
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const temp = reversedArray[left];
		reversedArray[left] = reversedArray[right];
		reversedArray[right] = temp;
		left++;
		right--;
	}

	return reversedArray;
}

const res = reverse([1, 2, 3, 4, 5]);
console.log(res);