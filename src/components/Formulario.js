import React, {Fragment} from 'react'
import './styles/formulario.css'

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label for="mascota">Nombre Mascota
                <input
                    id="mascota"
                    type= "text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"

                />                
                </label>
                <div className="row-radio">
                    <div className="perro-div">
                        <label for="perro">Perro
                        <input
                            id="perro"
                            type= "radio"
                            name="especie"                    
                            
                        />
                        </label>                  
                    </div>
                    <div className='gato-div'>
                        <label for="gato">Gato
                        <input
                            id="gato"
                            type= "radio"
                            name="especie"                
                            
                        /> 
                        </label>               
                    </div>
                </div>

                <label for="propietario">Nombre Dueño
                <input
                    id="propietario"
                    type= "text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"

                />
                </label>

                <label for="fecha">Fecha
                <input
                    id="fecha"
                    type= "date"
                    name="fecha"
                    className="u-full-width"             

                />
                </label>

                <label for="hora">Hora
                <input
                    id="hora"
                    type= "time"
                    name="hora"
                    className="u-full-width"             

                />
                </label>

                <label for="sintomas">Sintomas
                <textarea
                    id="sintomas"
                    name="sinotmas"
                    className="u-full-width"             
                    placeholder="¿Que sintomas tiene tu mascota?"

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
