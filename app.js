class Shape {
    constructor(shapeName) {

    }
}

class Circle extends Shape {
    constructor(radius) {
        super('circle');
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super('triangle');
        this.height = height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('rectangle');
        this.height = height;
        this.width = width;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super('square');
        this.sideLength = sideLength;
    }
}