
import './App.css';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador.js';
import logoW from './imagenes/web.jpg';
import { useState } from 'react';

function App() {

  const[numClics, setNumClics] = useState(0);

const manejarClic = () => {
  setNumClics(numClics + 1);
}

const reiniciarContador = () => {
  setNumClics(0);
}


  return (
    <div className='App'>
    < div className='contenedor-logo'>
    <img 
    className='logoW'
    src={logoW}
    alt='logo web'/>
    </div>


<div className='contenedor-general'> 

<Contador numClics={numClics}/>

<Boton
texto='Clic'
botonClics={true} 
manejarClic={manejarClic}/>
<Boton
texto='Reiniciar'
botonClics={false} 
manejarClic={reiniciarContador}/> 
    
    </div>

    </div>
  );
   }


export default App;
