const canvas = document.querySelector('#canvas');

class Shape {
    constructor(shapeName) {

    }
}

class Circle extends Shape {
    constructor(radius) {
        super('circle');
        this.radius = radius;

        this.element = document.createElement('div');
        this.element.classList.add('circle');
        this.element.style.width = `${radius * 2}px`;
        this.element.style.height = `${radius * 2}px`;
        this.element.style.position = 'absolute';
        this.element.style.top = `${Math.abs(Math.floor(Math.random() * 600))}px`;
        this.element.style.right = `${Math.abs(Math.floor(Math.random() * canvas.offsetWidth))}px`;

        canvas.appendChild(this.element);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super('triangle');
        this.height = height;

        this.element = document.createElement('div');
        this.element.classList.add('triangle');
        this.element.style.borderTop = `${height}px solid yellow`;
        this.element.style.borderRight = `${height}px solid transparent`;
        this.element.style.position = 'absolute';
        this.element.style.top = `${Math.abs(Math.floor(Math.random() * 600) - height)}px`;
        this.element.style.right = `${Math.abs(Math.floor(Math.random() * canvas.offsetWidth) - height)}px`;

        canvas.appendChild(this.element);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('rectangle');
        this.height = height;
        this.width = width;

        this.element = document.createElement('div');
        this.element.classList.add('rectangle');
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.position = 'absolute';
        this.element.style.top = `${Math.abs(Math.floor(Math.random() * 600) - height)}px`;
        this.element.style.right = `${Math.abs(Math.floor(Math.random() * canvas.offsetWidth) - width)}px`;

        canvas.appendChild(this.element);
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
const circleForm = document.querySelector('#add-circle');
const rectangleForm = document.querySelector('#add-rectangle');
const triangleForm = document.querySelector('#add-triangle');

squareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const sideLength = parseInt(form.elements["side-length"].value);
    new Square(sideLength);
    // form.reset();
});

circleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const radius = parseInt(form.elements["radius"].value);
    new Circle(radius);
    // form.reset();
});

rectangleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const width = parseInt(form.elements["width"].value);
    const height = parseInt(form.elements["height"].value);
    new Rectangle(width, height);
    // form.reset();
});

triangleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const height = parseInt(form.elements["height"].value);
    new Triangle(height);
    // form.reset();
});