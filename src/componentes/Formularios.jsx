import React from "react";
import styled from '@emotion/styled'

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
    return ( 
        <form>
            {/* 4.1 importamos el componente creado con styled components */}
            <Boton
                type= 'submit'
                value= 'Calcular'
            />
        </form>
    );
}
 
export default Formulario;