import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

//12.3 las opciones en este caso serán el valor de las criptomonedas pasadas desde la api en el useState listacripto, esto quizás sea un poco complejo pero es simplemente seguir el orden: en formulario pasamos en la posición 0 un valor aca esa posición es la 0 asi tengan nombres diferentes, por lo que aca label = Elige tu criptomoneda.
const useCriptomoneda = (label, stateInicial, opciones) => {

    console.log(opciones)
    const [state, actualizarState] = useState(stateInicial)

    
    const SelectCripto = () => (
        <Fragment>
            
            <Label>{label}</Label>

            
            <Select
                
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-- seleccione --</option>
                
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value= {opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))} 
            </Select>
        </Fragment>
    )

    
    return [ state, SelectCripto , actualizarState ]
}

export default useCriptomoneda