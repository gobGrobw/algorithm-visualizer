import * as d3 from 'd3';

export default function Chart(data) {
	// Attribute
	const width = 760;
	const height = 380;
	const transitionTime = 1000;
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	};

	// Declaring svg, x and y
	const svg = d3.select('#visualizer-container').append('svg');
	svg.attr('width', width).attr('height', height).attr('viewbox', [0, 0, width, height]);
	const x = d3
		.scaleBand()
		.domain(d3.range(data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);

	const y = d3
		.scaleLinear()
		.domain([0, data.length])
		.range([height - margin.bottom, margin.top]);

	// Display data into DOM
	function init() {
		const rect = svg
			.append('g')
			.attr('fill', '#d4af37')
			.selectAll('rect')
			.data(data)
			.join('rect');
		rect.attr('x', (d, i) => x(i));
		rect.attr('y', height);
		rect.transition()
			.duration(transitionTime)
			.attr('height', (d) => y(0) - y(d))
			.attr('y', (d) => y(d));
		rect.attr('width', x.bandwidth());
	}

	function update(newData) {
		const rect = svg.selectAll('rect').data(newData).join('rect');
		rect.attr('x', (d, i) => x(i));
		rect.transition()
			.duration(transitionTime)
			.attr('height', (d) => y(0) - y(d))
			.attr('y', (d) => y(d))
			.attr('width', x.bandwidth());
	}

	return {
		init,
		update,
	};
}
