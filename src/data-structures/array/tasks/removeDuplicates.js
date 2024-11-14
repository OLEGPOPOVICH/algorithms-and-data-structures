/**
 * Удаление дубликатов
 *
 * Напишите функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы.
 *
 * Input: [1, 2, 3, 2, 1]
 * Output: [1, 2, 3]
 */
const removeDuplicates = (arr) => {
	const uniqueArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (!uniqueArray.includes(arr[i])) {
			uniqueArray.push(arr[i]);
		}
	}

	return uniqueArray;
}

const res = removeDuplicates([1, 2, 3, 2, 1]);
console.log(res);