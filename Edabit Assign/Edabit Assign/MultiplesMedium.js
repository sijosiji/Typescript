/* Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
 */
function arrayOfMultiples(num, length) {
	multiplication = [];

	for (i = 1; i <= length; i++) {
		multiplication.push(num * i);
	}

	return multiplication;
}