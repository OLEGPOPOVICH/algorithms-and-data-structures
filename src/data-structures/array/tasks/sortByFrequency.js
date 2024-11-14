/**
 * Сортировка по частоте
 *
 * Напишите функцию, которая принимает массив и сортирует его по частоте появления элементов (от наиболее частого к наименее частому).
 * Если два элемента имеют одинаковую частоту, они должны быть расположены в порядке появления.
 *
 * Input: [5, 5, 1, 1, 2, 2, 2, 3, 3, 4]
 * Output: [2, 2, 2, 5, 5, 1, 1, 3, 3, 4]
 */
const sortByFrequency = (arr) => {
	/** Создаём объект для хранения частоты элементов */
	const frequencyMap = {};

	/** Подсчитываем частоту каждого элемента */
	for (let num of arr) {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	}

	/** Преобразуем объект в массив [элемент, частота] */
	const frequencyArray = Object.entries(frequencyMap);

	/** Сортируем массив на основе частоты, а затем по элементам */
	frequencyArray.sort((a, b) => {
		/** Сравниваем по частоте  */
		if (b[1] === a[1]) {
			/** Если частоты равны, сохраняем порядок появления */
			return arr.indexOf(+a[0]) - arr.indexOf(+b[0]);
		}

		return b[1] - a[1];
	});

	/** Создаём отсортированный массив с элементами, повторяющимися по их частоте */
	const sortedArray = [];

	for (let [num, count] of frequencyArray) {
		sortedArray.push(...Array(count).fill(Number(num)));
	}

	return sortedArray;
}

const res = sortByFrequency([5, 5, 1, 1, 2, 2, 2, 3, 3, 4]);
console.log(res);