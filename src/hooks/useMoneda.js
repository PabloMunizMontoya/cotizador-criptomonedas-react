import React, {Fragment, useState} from 'react'


//5. creamos la function que define nuestro hook
const useMoneda = () => {

    //5.2 estate de nuestro custom hook
    const [state, actualizarState] = useState('')

    //5.1 lo que esta aca es lo que se va a mostrar en pantalla, esto mostrara labels y selects. 
    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value='MXN'>Peso Mexicano</option>
            </select>
        </Fragment>
    )

    // Retornar state, interfaz y function que modifica el state
    return [ state, Seleccionar, actualizarState ]
}

export default useMoneda