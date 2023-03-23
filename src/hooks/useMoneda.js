import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'

//8. creamos el styled component para label
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display: block;
`
//9. creamos el styledComponents para el select
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

//5. creamos la function que define nuestro hook
//5.5 extraemos el valor puesto desde Formulario 'Elige tu Moneda', entonces decimos que cuando se utiliza useMoneda toma un valor que se llama label
//5.8 le pasamos el segundo valor que seria el state inicial, en este caso es un string vació qeu viene desde formulario.
//6.2 le pasamos al custom hook las MONEDAS, se lo pasamos como opciones
const useMoneda = (label, stateInicial, opciones) => {

    //5.2 estate de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial)

    //5.1 lo que esta aca es lo que se va a mostrar en pantalla, esto mostrara labels y selects. 
    const Seleccionar = () => (
        <Fragment>
            {/* 5.6 renderizamos el label que en este caso seria elige tu moneda */} 
            {/* 8.1 cambiamos el label por el styledComponent */}
            <Label>{label}</Label>

            {/* 9.1 borramos el select y ponemos el componente creado con component styled */}
            <Select
                /* 7. ponemos un onchange en el select para actualizar los datos del state, el onChange escucha los cambios en el select y el estado toma el valor del select, como state es moneda en el formulario el valor moneda se carga con el value del select */
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-- seleccione --</option>
                {/* 6.3 pasamos opciones que es un arreglo que contiene las monedas y lo mapeamos */}
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value= {opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )

    // Retornar state, interfaz y function que modifica el state
    return [ state, Seleccionar, actualizarState ]
}

export default useMoneda