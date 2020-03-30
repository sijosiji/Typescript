function arrayOfMultiples(num, length) {
	multiplication = [];

	for (i = 1; i <= length; i++) {
		multiplication.push(num * i);
	}

	return multiplication;
}