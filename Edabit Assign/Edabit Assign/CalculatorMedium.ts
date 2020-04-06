class CalculatorMedium {
    num1: number;
	num2: number;
	oper: string;
    constructor(num1: number, num2: number, oper: string) {
        this.num1 = num1;
        this.num2 = num2;
        this.oper = oper;
    }
	calculator() {
		switch (this.oper) {
			case '+':
				return this.num1 + this.num2;
			case '-':
				return this.num1 - this.num2;
			case '*':
				return this.num1 * this.num2;
			case '/':
				if (this.num2 === 0) return "Can't divide by 0!";
				return this.num1 / this.num2;
		}
		return null;
	}
}
var cal = new CalculatorMedium(10, 20, '*');
var calculate = cal.calculator();
alert("The answer of the calculation : " + calculate);