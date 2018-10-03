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

        const hide = () => {
            shapeInfoModal.modal( 'hide' );
        }

        const changeTitle = ( title ) => {
            shapeInfoModal.find( '.modal-title' ).text( title );
        }

        const changeBody = ( info ) => {
            const t = Object.entries( info ).map( ( [ key, value ] ) => `<p>${ capitalize( key ) }: ${ value }</p>` ).join( '' );
            shapeInfoModal.find( '.modal-body' ).html( t );
        }

        const removeBtn = shapeInfoModal.find( '#remove' )

        return {
            show,
            hide,
            removeBtn
        }
    } )();

    const makeShape = ( formData ) => {
        let shape;
        switch ( formData.name ) {
            case 'square':
                shape = new Square( formData );
                break;
            case 'circle':
                shape = new Circle( formData );
                break;
            case 'rectangle':
                shape = new Rectangle( formData );
                break;
            case 'triangle':
                shape = new Triangle( formData );
                break;
            default:
                break;
        }
        return shape;
    }

    $( '.add-shape' ).submit( ( e ) => {
        e.preventDefault();
        const formData = $( e.target ).serializeArray().reduce( ( formData, { name, value } ) => {
            formData[ name ] = value;
            return formData;
        }, {} );
        const shape = makeShape( formData );
        shape.element.addEventListener( 'click', () => {
            const info = shape.describe();
            shapeInfoModal.show( {
                title: shape.name,
                info
            } );
            shapeInfoModal.removeBtn.click( () => {
                shape.element.remove();
                shapeInfoModal.hide();
            } )
        } );
        canvas.append( shape.element );
        $( `#${ formData.name }Modal` ).modal( 'hide' );
    } );

    $( '.modal' ).on( 'hidden.bs.modal', ( e ) => {
        $( e.target ).find( 'form' ).trigger( "reset" );
    } );

} );
