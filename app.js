$( document ).ready( () => {
    $( '[data-toggle="tooltip"]' ).tooltip();

    const canvas = document.querySelector( '#canvas' );

    const shapeInfoModal = ( () => {
        const shapeInfoModal = $( '#shapeInfoModal' );

        const show = ( { title = '', info = {} } ) => {
            changeTitle( title );
            changeBody( info );
            shapeInfoModal.modal( 'show' );
        }

        const changeTitle = ( title ) => {
            shapeInfoModal.find( '.modal-title' ).text( title );
        }

        const changeBody = ( info ) => {
            const t = Object.entries( info ).map( ( [ key, value ] ) => `<p>${ capitalize( key ) }: ${ value }</p>` ).join( '' );
            shapeInfoModal.find( '.modal-body' ).html( t );
        }

        const removeBtn = ( callback ) => {
            shapeInfoModal.find( '#remove' ).click( () => {
                callback();
                shapeInfoModal.modal( 'hide' );
            } );

        }

        return {
            show,
            removeBtn
        }
    } )();

    const squareForm = $( '#add-square' );
    const circleForm = $( '#add-circle' );
    const rectangleForm = $( '#add-rectangle' );
    const triangleForm = $( '#add-triangle' );

    squareForm.submit( ( e ) => {
        e.preventDefault();
        const form = e.target;
        const sideLength = parseInt( form.elements[ "sideLength" ].value );
        const shape = new Square( sideLength );
        shape.element.addEventListener( 'click', () => {
            const info = shape.describe();
            shapeInfoModal.show( {
                title: shape.name,
                info
            } );
        } );
        shapeInfoModal.removeBtn( () => {
            shape.element.remove();
        } );
        canvas.append( shape.element )
        $( '#squareModal' ).modal( 'hide' );
        form.reset();
    } );

    circleForm.submit( ( e ) => {
        e.preventDefault();
        const form = e.target;
        const radius = parseInt( form.elements[ "radius" ].value );
        const shape = new Circle( radius );
        shape.element.addEventListener( 'click', () => {
            const info = shape.describe();
            shapeInfoModal.show( {
                title: shape.name,
                info
            } );
        } );
        shapeInfoModal.removeBtn( () => {
            shape.element.remove();
        } );
        canvas.append( shape.element )
        $( '#circleModal' ).modal( 'hide' );
        form.reset();
    } );

    rectangleForm.submit( ( e ) => {
        e.preventDefault();
        const form = e.target;
        const width = parseInt( form.elements[ "width" ].value );
        const height = parseInt( form.elements[ "height" ].value );
        const shape = new Rectangle( width, height );
        shape.element.addEventListener( 'click', () => {
            const info = shape.describe();
            shapeInfoModal.show( {
                title: shape.name,
                info
            } );
        } );
        shapeInfoModal.removeBtn( () => {
            shape.element.remove();
        } );
        canvas.append( shape.element )
        $( '#rectangleModal' ).modal( 'hide' );
        form.reset();
    } );

    triangleForm.submit( ( e ) => {
        e.preventDefault();
        const form = e.target;
        const height = parseInt( form.elements[ "height" ].value );
        const shape = new Triangle( height );
        shape.element.addEventListener( 'click', () => {
            const info = shape.describe();
            shapeInfoModal.show( {
                title: shape.name,
                info
            } );
        } );
        shapeInfoModal.removeBtn( () => {
            shape.element.remove();
        } );
        canvas.append( shape.element )
        $( '#triangleModal' ).modal( 'hide' );
        form.reset();
    } );

    $( '.modal' ).on( 'hidden.bs.modal', ( e ) => {
        $( e.target ).find( 'form' ).trigger( "reset" );
    } );

} );
