class Addition {
    num1: number;
    num2: number;
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }
    AdditionNum() {
        return (this.num1 + this.num2);
    }
}
var addition = new Addition(10, 20);
var add = addition.AdditionNum();
alert("Sum of the numbers : " + add);