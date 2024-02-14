import bubbleSort from '../bubbleSort';

test('Sort array correctly', () => {
	const data = [1, 2, 4, 5, 3];
	expect(bubbleSort(data)).toEqual([1, 2, 3, 4, 5]);
});

test('Sort array with duplicates correctly', () => {
	const data = [1, 2, 4, 2, 5, 3];
	expect(bubbleSort(data)).toEqual([1, 2, 2, 3, 4, 5]);
});
