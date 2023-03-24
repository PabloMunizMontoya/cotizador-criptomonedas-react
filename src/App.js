import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import imagen from './cryptomonedas.png'
import Formulario from './componentes/Formularios'
import Cotizacion from './componentes/Cotizacion'
import Spinner from './componentes/Spinner'

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

  //18 creamos un state para guardar la relación entre el precio moneda y criptomoneda.
  const [resultado, guardarResultado] = useState ({})

  //20. creamos state para cargar el spinner
  const [cargando, guardarCargando] = useState(false)

  //17. creo un useEffect que va a dispararse cuando el valor moneda y criptomoneda cambien, estos cambian con su useState desde formulario
  useEffect( ( ) =>  {
    
    
    const cotizarCriptomoneda = async  () => {

      //17.2 evitamos que el  useEffect se ejecute la primera vez que carga la pagina. recordar que el return hace que la function pare.
    if(moneda === '') return

    //17.3 vamos a volver a consultar la api con axios para obtener la cotización, vemos en esta url que fsyms = al codigo de la criptomoneda y que tsyms= al codigo de la moneda, entonces cambios esos valores por el valor obtenido desde los useState
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    //17.4 definimos el resultado en una variable usando axios y obteniendo el resultado de la url con un método get.
    const resultado = await axios.get(url)

    //20.1 mostrar el spinner, en esta instancia el estado pasa a true y luego con un set time out renderizamos el spinner.
    guardarCargando(true)

    //20.2 ocultamos el spinner con un set time out, entonces después de pasar 3 seg el spinner cambia a false y desaparece.
    setTimeout(() =>{

      //20.3 volvemos el estado de cargando a false
      guardarCargando(false)

      //17.5 18.1 guardamos el resultado en el estate creado para ello, vemos que el resultado es el recorrido del objeto que nos lleva hasta lo que deseamos, este camino es dinámico, cuando cambian los valores en el form el objeto cambia, por eso en el camino ponemos de forma dinámica los valores criptomoneda y moneda.
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])

    }, 3000)
    
    }
    
    //17.6 mandamos a llamar a la function
    cotizarCriptomoneda()
    
  }, [moneda, criptomoneda])

  //21. creamos una variable que contiene componentes en donde si algo es true o false el valor de este componente cambia de un componente a otro. esto se llama componente condicional
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado = {resultado}/>

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
        
        {/* 21.2 mostramos en pantalla el componente condicional */}
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
