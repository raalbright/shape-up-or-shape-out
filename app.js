const canvas = document.querySelector( '#canvas' );

const capitalize = ( str ) => {
    return `${ str.substring( 0, 1 ).toUpperCase() }${ str.substring( 1 ) }`
}

const sidePanel = ( () => {
    const sidePanel = document.querySelector( '#side-panel' );

    const changeInfo = ( d ) => {
        const info = Object.entries( d ).map( ( [ key, value ] ) => `${ capitalize( key ) }: ${ value }` ).join( '\n' );
        sidePanel.innerText = info;
    }
    return {
        changeInfo
    }
} )();

class Shape {
    constructor ( { shape = 'shape', width = 0, height = 0 } ) {
        this.shape = capitalize( shape );
        this.width = width;
        this.height = height;

        this.element = document.createElement( 'div' );
        this.element.classList.add( 'shape', shape );

        this.element.style.width = `${ width }px`;
        this.element.style.height = `${ height }px`;

        this.element.addEventListener( 'click', () => {
            const info = this.describe();
            sidePanel.changeInfo( info );
        } );

        this.element.addEventListener( 'dblclick', () => canvas.removeChild( this.element ) );

        canvas.appendChild( this.element );
    }

    describe () { }

    area () { }
}

class Circle extends Shape {
    constructor ( radius ) {
        super( {
            shape: 'circle',
            width: radius * 2,
            height: radius * 2
        } );
        this.radius = radius;

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }

    area () {
        return Math.PI * ( this.radius ** 2 );
    }

    circumference () {
        return 2 * ( Math.PI * this.radius );
    }

    describe () {
        return {
            shape: this.shape,
            diameter: this.width,
            radius: this.radius,
            area: this.area(),
            circumference: this.circumference()
        }
    }
}

class Triangle extends Shape {
    constructor ( height ) {
        super( {
            shape: 'triangle',
            height
        } );

        this.element.style.borderTop = `${ height }px solid yellow`;
        this.element.style.borderRight = `${ height }px solid transparent`;

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.height ) ) ) }px`;
    }

    area () {
        return 0.5 * this.height * this.height;
    }


    perimeter () {
        return 2 * this.height + ( Math.sqrt( 2 ) * this.height );
    }

    describe () {
        return {
            shape: this.shape,
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}

class Rectangle extends Shape {
    constructor ( width, height ) {
        super( {
            shape: 'rectangle',
            width,
            height
        } );

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }

    area () {
        return this.width * this.height;
    }

    perimeter () {
        return 2 * ( this.width + this.height );
    }

    describe () {
        return {
            shape: this.shape,
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}

class Square extends Shape {
    constructor ( sideLength ) {
        super( {
            shape: 'square',
            width: sideLength,
            height: sideLength
        } );

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }

    area () {
        return this.width ** 2;
    }

    perimeter () {
        return 4 * this.width;
    }

    describe () {
        return {
            shape: this.shape,
            height: this.height,
            width: this.width,
            area: this.area(),
            perimeter: this.perimeter()
        }
    }
}

const squareForm = document.querySelector( '#add-square' );
const circleForm = document.querySelector( '#add-circle' );
const rectangleForm = document.querySelector( '#add-rectangle' );
const triangleForm = document.querySelector( '#add-triangle' );

squareForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const form = e.target;
    const sideLength = parseInt( form.elements[ "side-length" ].value );
    new Square( sideLength );
    form.reset();
} );

circleForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const form = e.target;
    const radius = parseInt( form.elements[ "radius" ].value );
    new Circle( radius );
    form.reset();
} );

rectangleForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const form = e.target;
    const width = parseInt( form.elements[ "width" ].value );
    const height = parseInt( form.elements[ "height" ].value );
    new Rectangle( width, height );
    form.reset();
} );

triangleForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const form = e.target;
    const height = parseInt( form.elements[ "height" ].value );
    new Triangle( height );
    form.reset();
} );
