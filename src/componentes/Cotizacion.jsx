import React from 'react'

// 19. extremos la prop resultado dada desde app
const Cotizacion = ({resultado}) => {

    console.log(resultado)
    //19.1 como resultado es al principio un objeto vació generamos una condicional para que cuando este vació no se muestre en pantalla 
    if(Object.keys(resultado).length === 0) return null

    return ( 
        <div>
            {/* 19.2 resultado tiene como propiedad PRICE, renderizamos entonces este valor */} 
            <p>El precio es : <span>{resultado.PRICE}</span></p>
            <p>El mas alto del dia es : <span>{resultado.HIGHDAY}</span></p>
            <p>El precio mas bajo del dia es : <span>{resultado.LOWDAY}</span></p>
            <p>La variación en las ultimas 24 horas es  : <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>La ultima actualización es  : <span>{resultado.LASTUPDATE}</span></p>
        </div>
    )

    ;
}
 
export default Cotizacion;