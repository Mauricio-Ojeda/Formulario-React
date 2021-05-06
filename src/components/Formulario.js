import React, {Fragment, useState} from 'react'
import './styles/formulario.css'
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCitas}) => {
    
    //crear state de cita
    const [cita, actualizarCita] = useState({

        mascota: '',
        especie:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })

    //State Error Falta completar un campo
    const [error, actualizarError] = useState(false)

    //State input type radio
    const [radio, actualizarRadio ] = useState({
        perro: false,
        gato: false
    })

    // handle onClick Radio
    const handleOnClick = e =>{ 
        
        actualizarRadio({
        [e.target.value]:true
        })
    }

    // handleChange input

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    
    //hadle Submit
    const handleSubmit = e =>{
        e.preventDefault();
        
        // validar
        if(mascota.trim() === '' | especie.trim() === '' | propietario.trim() === ''
         | fecha.trim() === '' | hora.trim() === '' | sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        // Eliminar mensaje error
        actualizarError(false);

        //Asignar ID
        cita.id = uuid();

        //crear citas
        crearCitas(cita);
        
        //Reiniciar formulario
        actualizarCita({
           
            mascota: '',
            especie:'',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        //Reiniciar radio
        actualizarRadio({ perro: false, gato: false});

    }

    // Extraer Valores

    const {mascota, especie, propietario, fecha, hora, sintomas} = cita;


    return (
        <Fragment>

            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error"> Todos los Campos deben ser Completados </p> : null}

            <form
                onSubmit={handleSubmit}    
            >
                <label htmlFor="mascota">Nombre Mascota
                <input
                    id="mascota"
                    type= "text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}

                />
                  
                <h5 >Especie</h5>   
                           
                </label>
                <div className="row-radio">
                    <div className="perro-div">
                        <label htmlFor="perro">Perro
                        <input
                            id="perro"
                            type= "radio"
                            name="especie"
                            value="perro"
                            onChange={handleChange}
                            onClick={handleOnClick}
                            checked={radio.perro}
                            
                        />
                        </label>                  
                    </div>
                    <div className='gato-div'>
                        <label htmlFor="gato">Gato
                        <input
                            id="gato"
                            type= "radio"
                            name="especie"
                            value="gato"                
                            onChange={handleChange}
                            onClick={handleOnClick}
                            checked={radio.gato}

                        /> 
                        </label>               
                    </div>
                </div>

                <label htmlFor="propietario">Nombre Dueño
                <input
                    id="propietario"
                    type= "text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}

                />
                </label>

                <label htmlFor="fecha">Fecha
                <input
                    id="fecha"
                    type= "date"
                    name="fecha"
                    className="u-full-width"             
                    onChange={handleChange}
                    value={fecha}

                />
                </label>

                <label htmlFor="hora">Hora
                <input
                    id="hora"
                    type= "time"
                    name="hora"
                    className="u-full-width" 
                    onChange={handleChange} 
                    value={hora}           

                />
                </label>

                <label htmlFor="sintomas">Sintomas
                <textarea
                    id="sintomas"
                    name="sintomas"
                    className="u-full-width"             
                    placeholder="¿Que sintomas tiene tu mascota?"
                    onChange={handleChange}
                    value={sintomas}

                ></textarea>
                </label>

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
