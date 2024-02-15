import * as d3 from 'd3';

export default function Chart(data) {
	// Attribute
	const width = 760;
	const height = 380;
	const transitionTime = 600;
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	};
	const color = {
		yellowDanger: '#d4af37',
		darkishGrey: '#222222',
		royalBlue: '#00296B',
		whiteGray: '#EAEBEB',
	};

	// Declaring x and y
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
		const svg = d3.select('#visualizer-container').append('svg');
		svg.attr('width', width).attr('height', height).attr('viewbox', [0, 0, width, height]);

		const group = svg.selectAll('g').data(data).enter();

		// Adds rectangle to group
		const rect = group
			.append('rect')
			.attr('class', `data-${(d) => d}`)
			.attr('fill', color.yellowDanger)
			.attr('x', (d, i) => x(i))
			.attr('y', height);
		rect.transition()
			.duration(transitionTime)
			.attr('height', (d) => y(0) - y(d))
			.attr('y', (d) => y(d));
		rect.attr('width', x.bandwidth());

		// Adds text to group
		group
			.append('text')
			.attr('x', (d, i) => x(i) + x.bandwidth() / 2)
			.attr('y', height - x.bandwidth() / 2)
			.attr('fill', color.darkishGrey)
			.style('stroke-width', 1)
			.style('font-size', '18px')
			.style('font-weight', 'bold')
			.style('text-anchor', 'middle')
			.text((d) => d);
	}

	// Updates DOM chart with new data
	function update(newData) {
		const svg = d3.select('svg');
		const rect = svg.selectAll('rect').data(newData).join('rect');
		rect.transition()
			.duration(transitionTime)
			.attr('height', (d) => y(0) - y(d))
			.attr('y', (d) => y(d));

		const text = svg.selectAll('text').data(newData).join('text');
		text.text((d) => d);
	}

	function swap(datas) {
		const firstVal = datas.firstVal;
		const secondVal = datas.secondVal;

		const svg = d3.select('svg');
		const rect = svg.selectAll('rect').data(datas.swappedArr).join('rect');
		rect.transition()
			.duration(transitionTime)
			.attr('height', (d) => y(0) - y(d))
			.attr('y', (d) => y(d))
			.attr('fill', (d) => {
				if (d === firstVal) return color.whiteGray;
				if (d === secondVal) return color.whiteGray;
				else return color.yellowDanger;
			});

		svg.selectAll('text')
			.data(datas.swappedArr)
			.join('text')
			.text((d) => d);
	}

	return {
		init,
		update,
		swap,
	};
}
