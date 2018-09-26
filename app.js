const canvas = document.querySelector('#canvas');

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

        this.element = document.createElement('div');
        this.element.classList.add('square');
        this.element.style.width = `${sideLength}px`;
        this.element.style.height = `${sideLength}px`;
        this.element.style.position = 'absolute';
        this.element.style.top = `${Math.abs(Math.floor(Math.random() * 600) - sideLength)}px`;
        this.element.style.right = `${Math.abs(Math.floor(Math.random() * canvas.offsetWidth) - sideLength)}px`;

        canvas.appendChild(this.element);
    }
}

const squareForm = document.querySelector('#add-square');

squareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const sideLength = parseInt(form.elements["side-length"].value);
    new Square(sideLength);
    // form.reset();
});