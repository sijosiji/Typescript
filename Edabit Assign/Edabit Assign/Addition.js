var Addition = /** @class */ (function () {
    function Addition(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Addition.prototype.AdditionNum = function () {
        return (this.num1 + this.num2);
    };
    return Addition;
}());
var addition = new Addition(10, 20);
var add = addition.AdditionNum();
alert("Sum of the numbers : " + add);
//# sourceMappingURL=Addition.js.map