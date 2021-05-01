const _log = () => {};

const _binarySearch = (array, target) => {
	let startIndex = 0;
	let endIndex = array.length - 1;
	let result = false;
	let cursor;

	while (startIndex <= endIndex) {
		cursor = Math.floor((startIndex + endIndex) / 2);

		if (array[cursor] === target) 
			return [array[cursor], cursor];
		else if (array[cursor] > target) 
			endIndex = cursor - 1;
		else 
			startIndex = cursor + 1;
	}

	return [result, cursor];
};

// N + log2N + N
const binary = (arrayA, arrayB, expectedSum) => {
	for (i in arrayA) {
		const valueInA = arrayA[i];
		const expectedNumber = expectedSum - valueInA;
		const [result, index] = _binarySearch(arrayB.sort(), expectedNumber);

		if (result && index) {
			console.log(
				`a[${i}]:${valueInA} + b[${index}]:${result} = ${
					valueInA + result
				}`
			);
		}
	}
};

// N * 2N
const linear = (arrayA, arrayB, expectedSum) => {
	for (i in arrayA) {
		const valueInA = arrayA[i];

		arrayB.map((valueInB, index) => {
			if(valueInB + valueInA === expectedSum) {
				console.log(
					`a[${i}]:${valueInA} + b[${index}]:${valueInB} = ${
						valueInB + valueInA
					}`
				);
			}
		});
	}
};

const sum = (expectedSum, strategy) => {
	const startTimer = new Date().getTime();

	const a = Array.from({ length: 300 } , () => Math.floor(Math.random() * 5));
	const b = Array.from({ length: 100 } , () => Math.floor(Math.random() * 2));

	strategy(a, b, expectedSum);

	return new Date().getTime() - startTimer;
};

const timerBinary = sum(2, binary);
const timerLinear = sum(2, linear);

console.info('Execution binary:', timerBinary);
console.info('Execution linear:', timerLinear);