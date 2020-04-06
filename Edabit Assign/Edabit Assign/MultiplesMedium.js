var MultiplesMedium = /** @class */ (function () {
    function MultiplesMedium(num, length) {
        this.num = num;
        this.length = length;
    }
    MultiplesMedium.prototype.ArrayOfMultiples = function () {
        var multiplication = new Array(length);
        for (var i = 1; i <= this.length; i++) {
            multiplication.push(this.num * i);
        }
        return multiplication;
    };
    return MultiplesMedium;
}());
var mult = new MultiplesMedium(3, 10);
var multiple = mult.ArrayOfMultiples();
alert("Multiples of the number : " + multiple);
//# sourceMappingURL=MultiplesMedium.js.map