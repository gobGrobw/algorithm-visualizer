export default function Data() {
	// Generates data with length of 10
	function generate() {
		const arr = [];
		for (let i = 1; i <= 10; i++) {
			arr.push(i);
		}

		return arr;
	}

	function shuffle(arr) {
		const cArr = [...arr];
		for (let i = cArr.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			const temp = cArr[i];
			cArr[i] = cArr[randomIndex];
			cArr[randomIndex] = temp;
		}

		return cArr;
	}

	return {
		generate,
		shuffle,
	};
}
