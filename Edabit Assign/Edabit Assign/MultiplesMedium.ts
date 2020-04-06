class MultiplesMedium {
	num: number;
	length: number;
	constructor(num: number, length: number) {
		this.num = num;
		this.length = length;
	}
	ArrayOfMultiples() {
	var multiplication: number[] = new Array(length)  

	for (var i = 1; i <= this.length; i++) {
		multiplication.push(this.num * i);
	}

	return multiplication;
	}
}
var mult = new MultiplesMedium(3,10);
var multiple = mult.ArrayOfMultiples();
alert("Multiples of the number : " + multiple);