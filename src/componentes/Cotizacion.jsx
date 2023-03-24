import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
    color: #FFFF;
    font-family: Arial, Helvetica, sans-serif 
`

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`
// 19. extremos la prop resultado dada desde app
const Cotizacion = ({resultado}) => {

    console.log(resultado)
    //19.1 como resultado es al principio un objeto vació generamos una condicional para que cuando este vació no se muestre en pantalla 
    if(Object.keys(resultado).length === 0) return null

    return ( 
        <ResultadoDiv>
            {/* 19.2 resultado tiene como propiedad PRICE, renderizamos entonces este valor */} 
            <Precio>El precio es : <span>{resultado.PRICE}</span></Precio>
            <Info>El mas alto del dia es : <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del dia es : <span>{resultado.LOWDAY}</span></Info>
            <Info>La variación en las ultimas 24 horas es  : <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>La ultima actualización es  : <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )

    ;
}
 
export default Cotizacion;