import React  from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, botonClics, manejarClic}) {
    return(
     <button
 className= { botonClics ? 'boton-clic' : 'boton-reiniciar' }
     onClick={manejarClic}> 
     {texto}
        </button>
    );
}

export default Boton;