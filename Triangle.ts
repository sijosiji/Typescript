class Triangle {
    base: number;
    height: number;
    constructor(base: number, height:number) {
        this.base = base;
        this.height = height;
    }
    AreaOfTriangle() {
        return ((this.base * this.height) / 2);
    }
}
var triangle = new Triangle(6, 12);
var area = triangle.AreaOfTriangle();
alert("Area of Triangle : " + area);