import * as d3 from 'd3';
import Chart from './chart';
import Data from './data';

function Main() {
	function init() {
		const data = Data();
		const dataArr = data.generate();

		const chart = Chart(dataArr);
		chart.init(dataArr);

		d3.select('#randomize-data-btn').on('click', () => {
			const shuffledData = data.shuffle(dataArr);
			console.log(shuffledData);
			chart.update(shuffledData);
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
