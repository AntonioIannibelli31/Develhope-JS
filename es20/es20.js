class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(area) {
    this.area = area;
  }
  static calculate(geoFigure) {
    if (geoFigure instanceof Square) {
      this.area = geoFigure.side * 4;
      return this.area;
    }
    if (geoFigure instanceof Rectangle) {
      this.area = geoFigure.width * geoFigure.height;
      return this.area;
    } else {
      this.area = geoFigure.radius * geoFigure.radius * Math.PI;
      return this.area;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
