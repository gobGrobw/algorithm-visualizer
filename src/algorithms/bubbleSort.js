export default function* bubbleSort(arr) {
	let flag = true;
	while (flag) {
		flag = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;

				yield {
					swappedArr: arr,
					firstVal: arr[i],
					secondVal: arr[i + 1],
				};
				flag = true;
			}
		}
	}
}
