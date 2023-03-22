import React from "react";
import styled from '@emotion/styled'
import useMoneda from "../hooks/useMoneda";

//4. creamos el componente styled para boton
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326a60;
        cursor: pointer;
    }
`

const Formulario = () => {

    //5.3 Utilizar useMoneda, que es el custom hook, lo hacemos con array destructuring, lo que importa aca es el orden en que se retorna en el custom hook return [ state, Seleccionar, actualizarState ], entonces para usarlo puedo re nombrar y toma el valor según la posición 0,1,2.
    const [ moneda, SelectMonedas, actualizarState ] = useMoneda()

    return ( 
        <form>

            {/* 5.4 usamos lo que se muestra en pantalla del custom hook, que es selectMonedas, como un componente */}
            <SelectMonedas/>
            
            {/* 4.1 importamos el componente creado con styled components */}
            <Boton
                type= 'submit'
                value= 'Calcular'
            />
        </form>
    );
}
 
export default Formulario;