import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import './App.css';


function App() {

  //citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales){
    citasIniciales = [];
  }
  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales); 

  // Use effect para realizar ciertas operaciones cuando el state cambia

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else{
        localStorage.setItem('citas', JSON.stringify([]));
    }
    
  }, [citas])
  
  // funcion que tome citas actuales y agregue nuevas
  const crearCitas = cita => {
     guardarCitas([
      ...citas,
      cita
    ]);
      
  }

  //funcion que elimina una cita por su id

  const eliminarCita = id =>{

      const nuevasCitas = citas.filter(cita => cita.id !== id);

      guardarCitas(nuevasCitas);
  }

//Mensaje condicional

  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administra tus Citas';

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
                <h2>{titulo}</h2>

                {citas.map(cita =>(
                  <Cita

                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}

                  />
                ))}
          </div>
        </div>

      </div>

    </Fragment>
  );
}


export default App;

