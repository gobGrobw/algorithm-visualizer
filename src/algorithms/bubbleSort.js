import Chart from '../chart';

export default function bubbleSort(arr) {
	const chart = Chart(arr);
	let flag = true;
	while (flag) {
		flag = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;

				flag = true;
			}
		}
	}

	chart.update(arr);
}
