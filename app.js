const canvas = document.querySelector( '#canvas' );
const sidePanel = ( () => {
    const sidePanel = document.querySelector( '#side-panel' );

    return {}
} )();

class Shape {
    constructor ( { shapeName = 'shape', width = 0, height = 0 } ) {
        this.shapeName = shapeName
        this.width = width;
        this.height = height;

        this.element = document.createElement( 'div' );
        this.element.classList.add( 'shape', shapeName );

        this.element.style.width = `${ width }px`;
        this.element.style.height = `${ height }px`;

        this.element.addEventListener( 'click', () => {
            const info = this.describe();
            console.log( info );
        } );

        this.element.addEventListener( 'dblclick', () => canvas.removeChild( this.element ) );

        canvas.appendChild( this.element );
    }

    describe () { }

    area () {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor ( radius ) {
        super( {
            shapeName: 'circle',
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
}

class Triangle extends Shape {
    constructor ( height ) {
        super( {
            shapeName: 'triangle',
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
        return 2 * this.height + ( Math.sqrt( 2 ) ) * this.height;
    }
}

class Rectangle extends Shape {
    constructor ( width, height ) {
        super( {
            shapeName: 'rectangle',
            width,
            height
        } );

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }

    perimeter () {
        return 2 * ( this.width + this.height );
    }
}

class Square extends Shape {
    constructor ( sideLength ) {
        super( {
            shapeName: 'square',
            width: sideLength,
            height: sideLength
        } );

        this.element.style.top = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetHeight - this.height ) ) ) }px`;
        this.element.style.right = `${ Math.abs( Math.floor( Math.random() * ( canvas.offsetWidth - this.width ) ) ) }px`;
    }

    perimeter () {
        return 4 * this.width;
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
