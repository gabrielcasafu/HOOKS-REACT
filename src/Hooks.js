import React, { useState, useEffect  } from 'react';
import './App.css';

function SimpleFunction() {

  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `La cuenta es  ${cuenta}`;
  });

  return (
    <div className="App">
      <h2>Presentando Hooks</h2>
      <p>Hooks son una nueva característica en React 16.8. <br/>Estos te permiten usar el estado y otras características de React sin escribir una clase.</p>
      <p>LA CUENTA ES: {cuenta}</p>

      <button onClick={() => setCuenta(cuenta + 1)} className="App-buttom">
        Aumentar cuenta
      </button>
      {
          cuenta < 1 ?
      
        <button
            disabled
            onClick={() => setCuenta(cuenta - 1)} className="App-buttom"
        >
            Disminuir cuenta
        </button>
      :
        <button
           
            onClick={() => setCuenta(cuenta - 1)} className="App-buttom"
        >
            Disminuir cuenta
        </button>
      }
      <p>En este ejemplo utilizaremos 2 hooks: <br/>useState, useEffect</p>
    </div>
  );
}

export default SimpleFunction;