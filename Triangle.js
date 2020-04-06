var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.AreaOfTriangle = function () {
        return ((this.base * this.height) / 2);
    };
    return Triangle;
}());
var triangle = new Triangle(6, 12);
var area = triangle.AreaOfTriangle();
alert("Area of Triangle : " + area);
//# sourceMappingURL=Triangle.js.map