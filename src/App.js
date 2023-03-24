import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import imagen from './cryptomonedas.png'
import Formulario from './componentes/Formularios'

//1. creamos el componente styled
const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  }
` 
//2. creamos el styled components para imagen.
const Imagen = styled.img`
  max-width:100%;
  margin-top: 5rem;
`
//3. creamos el styled Component para el h1
const Heading = styled.h1`
  font-family: 'Bebas Neue' , cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`
function App() {


  //15. creamos el useState para guardar el valor de la moneda en app
  const [moneda, guardarMoneda] = useState('')

  //16.creo el state para guardar el valor de la criptomoneda en app
  const [criptomoneda, guardarCriptomoneda] = useState('')

  //17. creo un useEffect que va a dispararse cuando el valor moneda y criptomoneda cambien, estos cambian con su useState desde formulario
  useEffect( ( ) =>  {
    
    
    const cotizarCriptomoneda = async  () => {

      //17.2 evitamos que el  useEffect se ejecute la primera vez que carga la pagina. recordar que el return hace que la function pare.
    if(moneda === '') return

    //17.3 vamos a volver a consultar la api con axios para obtener la cotización, vemos en esta url que fsyms = al codigo de la criptomoneda y que tsyms= al codigo de la moneda, entonces cambios esos valores por el valor obtenido desde los useState
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    //17.4 definimos el resultado en una variable usando axios y obteniendo el resultado de la url con un método get.
    const resultado = await axios.get(url)
    console.log(resultado.data.DISPLAY[criptomoneda][moneda])
    }
    
    //17.5 mandamos a llamar a la function
    cotizarCriptomoneda()
    
  }, [moneda, criptomoneda])

  return (
    /* 1.2 insertamos el componente creado con styledComponents */
    <Contenedor>
      <div>

        {/* 2.1 insertamos el componente Imagen creado con styledComponents y como prop le mandamos la imagen importada y la descripción textual de la imagen */}
        <Imagen 
          src={imagen}
          alt= "imagen crypto"
        />
      </div>
      <div>
        {/* 3.1 insertamos el styled component para h1 */}
        <Heading>
          Cotiza Criptomonedas al instante
        </Heading>
        
        <Formulario 

          /* 15.1 16.1 guardamos moneda y criptomoneda pasando los useState al formulario como propiedad */
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;
