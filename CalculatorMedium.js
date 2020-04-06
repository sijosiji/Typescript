var CalculatorMedium = /** @class */ (function () {
    function CalculatorMedium(num1, num2, oper) {
        this.num1 = num1;
        this.num2 = num2;
        this.oper = oper;
    }
    CalculatorMedium.prototype.calculator = function () {
        switch (this.oper) {
            case '+':
                return this.num1 + this.num2;
            case '-':
                return this.num1 - this.num2;
            case '*':
                return this.num1 * this.num2;
            case '/':
                if (this.num2 === 0)
                    return "Can't divide by 0!";
                return this.num1 / this.num2;
        }
        return null;
    };
    return CalculatorMedium;
}());
var cal = new CalculatorMedium(10, 20, '*');
var calculate = cal.calculator();
alert("The answer of the calculation : " + calculate);
//# sourceMappingURL=CalculatorMedium.js.map