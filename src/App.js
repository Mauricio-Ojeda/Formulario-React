import React, { Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import './App.css';

function App() {
  
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]); 
  
  // funcion que tome citas actuales y agregue nuevas
  const crearCitas = cita => {
     guardarCitas([
      ...citas,
      cita
    ]);
      
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
                <Formulario
                  crearCitas={crearCitas}
                />
          </div>
          <div className="one-half column">
                <h2>Administra tus Citas</h2>
                {citas.map(cita =>(
                  <Cita

                    key={cita.id}
                    cita={cita}

                  />
                ))}
          </div>
        </div>

      </div>

    </Fragment>
  );
}

export default App;
