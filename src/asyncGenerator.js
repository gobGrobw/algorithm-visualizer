const timer = (ms) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

export default async function asyncGenerator(val, cb, response) {
	const stepper = cb(val);
	let done = false;

	while (!done) {
		const value = stepper.next().value;
		if (value === undefined) {
			done = true;
		} else {
			response(value);
			console.log(value);
			await timer(600);
		}
	}
}
