const capitalize = ( str ) => `${ str.substring( 0, 1 ).toUpperCase() }${ str.substring( 1 ) }`;

class Shape {
    constructor ( { name = 'shape', width = 0, height = 0 } ) {
        this.name = capitalize( name );
        this.width = width;
        this.height = height;

        this.element = document.createElement( 'div' );
        this.element.classList.add( 'shape', name );

        this.element.style.width = `${ width }px`;
        this.element.style.height = `${ height }px`;

        this.draw();
    }

    draw () {
        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }
}

class Circle extends Shape {
    constructor ( { radius = 0 } ) {
        super( {
            name: 'circle',
            width: radius * 2,
            height: radius * 2
        } );
        this.radius = radius;
    }

    area () {
        return Math.PI * ( this.radius ** 2 );
    }

    circumference () {
        return 2 * ( Math.PI * this.radius );
    }

    describe () {
        return {
            diameter: this.width,
            radius: this.radius,
            area: this.area(),
            circumference: this.circumference()
        }
    }
}

class Triangle extends Shape {
    constructor ( { height = 0 } ) {
        super( {
            name: 'triangle',
            height
        } );

        this.element.style.borderTop = `${ height }px solid yellow`;
        this.element.style.borderRight = `${ height }px solid transparent`;
    }

    area () {
        return 0.5 * this.height * this.height;
    }


    perimeter () {
        return 2 * this.height + ( Math.sqrt( 2 ) * this.height );
    }

    describe () {
        return {
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}

class Rectangle extends Shape {
    constructor ( { width = 0, height = 0 } ) {
        super( {
            name: 'rectangle',
            width,
            height
        } );

    }

    area () {
        return this.width * this.height;
    }

    perimeter () {
        return 2 * ( this.width + this.height );
    }

    describe () {
        return {
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}

class Square extends Shape {
    constructor ( { sideLength = 0 } ) {
        super( {
            name: 'square',
            width: sideLength,
            height: sideLength
        } );
    }

    area () {
        return this.width ** 2;
    }

    perimeter () {
        return 4 * this.width;
    }

    describe () {
        return {
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}
