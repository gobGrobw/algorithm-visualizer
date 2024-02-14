import * as d3 from 'd3';
import Chart from './chart';
import Data from './data';
import bubbleSort from './algorithms/bubbleSort';

function Main() {
	const data = Data();
	const dataArr = data.generate();

	function visualize(toBeSorted, sortAlgorithm) {
		switch (sortAlgorithm) {
			case 'bubble-sort':
				bubbleSort(toBeSorted);
				return;

			default:
				throw new Error(`${sortAlgorithm} does not exist!`);
		}
	}

	function init() {
		const chart = Chart(dataArr);
		chart.init(dataArr);

		d3.select('#randomize-data-btn').on('click', () => {
			const shuffledData = data.shuffle(dataArr);
			console.log(shuffledData);
			chart.update(shuffledData);
		});

		d3.select('#visualize-btn').on('click', () => {
			// Gets the option and visualize it
			const sortOptions = d3.select('#algorithm-option');
			visualize(dataArr, sortOptions.node().value);
		});
	}

	return {
		init,
	};
}

window.onload = () => {
	const main = Main();
	main.init();
};
