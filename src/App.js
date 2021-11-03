import './App.css';
import { useState } from 'react';

const Mensaje = () =>{
  return <h1>Hola mundo</h1>
}
const Form = () =>{
  return <form className="form">
  <h1 className="form__title">Formulario</h1>
    <div className="form__container">
      <div className="form__group">
        <input className="form__input" type="email" placeholder=" "/>
        <label className="form__label">email</label>
        <span className="form__line"></span>
      </div>
      <div className="form__group">
        <input className="form__input" type="password" placeholder=" "/>
        <label className="form__label">contraseña</label>
        <span className="form__line"></span>
      </div>
      <input type="submit" className="form__submit" value="LogIn" />
    </div>
    
  </form>
}


/**
 * Un componente es una funcion pero con una mayuscula como nombre. 
 * Los componentes son nombres.
 * No es HTML. 
 * Las llaves son una evaluacion, le pasaremos ahi las variables y codigo javascript. 
 * Tienen que ser cosas que se pueden pintar.
 * con un + lo transformo en un timeStand. 
 * @returns 
 * 
 */
const incrementar = () =>{
  
}

function App(props) {
  const [contador, updateContador] =useState(0);
  




  return (
    <div>
      <p>el valor del contador es: </p>
      <h1>{contador}</h1>
      <button onClick={() => {
        updateContador(contador+1);
      }} >
        incrementar
      </button>

    </div>
  );
}

export default App;
