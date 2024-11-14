/**
 * Конкатенация двух массивов
 *
 * Напишите функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов
 * первого массива, за которым следуют элементы второго массив.
 *
 * Input: [1, 2, 3], [4, 5, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */
const concat = (arr1, arr2) => {
	const res = [];

	for (let i = 0; i < arr1.length; i++) {
		res[res.length] = arr1[i];
	}

	for (let i = 0; i < arr2.length; i++) {
		res[res.length] = arr2[i];
	}

	return res;
}

const res = concat([1, 2, 3], [4, 5, 6]);
console.log(res);

const concat2 = (arr1, arr2) => {
	return [...arr1, ...arr2];
}

const res2 = concat2([1, 2, 3], [4, 5, 6]);
console.log(res2);