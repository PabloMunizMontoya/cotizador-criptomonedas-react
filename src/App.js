import React from 'react'
import styled from '@emotion/styled'
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
        
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
