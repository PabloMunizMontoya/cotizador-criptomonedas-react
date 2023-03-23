import React, {useEffect, useState} from "react";
import styled from '@emotion/styled'
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";

import axios from 'axios'

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

    //12. creamos el useState para guardar el listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([])

    //6. creamos una variable que sera un array de objetos con los nombres de las monedas.
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //5.3 Utilizar useMoneda, que es el custom hook, lo hacemos con array destructuring, lo que importa aca es el orden en que se retorna en el custom hook return [ state, Seleccionar, actualizarState ], entonces para usarlo puedo re nombrar y toma el valor según la posición 0,1,2.
    //5.4 ahora le pasamos un valor inicial a useMoneda, este en realidad seria el primer valor, pero le podemos pasar mas valores, ahora le vamos a pasar la moneda.
    //5.7 pasamos la moneda que en este caso sera un string vació ya que ese valor sea la moneda que elige el usuario.
    //6.1 le pasamos a nuestro custom hook el objeto MONEDAS
    const [ moneda, SelectMonedas,] = useMoneda('Elige tu Moneda', '', MONEDAS)

    //10. utilizamos el hook creado useCriptomoneda, usamos los valores que retorna y hacemos un array destructuring, el valor de estas variables depende del orden del array en que se exportan en el custom hook.
    //10.1 le pasamos valores al custom hook que serán consumidos por la operación.
    //12.2 le pasamos el useState listacripto, ya con los datos traídos desde la api al custom hook.
    const [criptoMoneda, SelectCripto,] = useCriptomoneda ('Elige tu criptomoneda', '', listacripto)

    //11. ejecutamos el llamado a la api, con un use effect que se ejecuta una sola vez [ ], estamos usando axios por esto no usamos el fetch y por ultimo hacemos un llamado a la function.
    useEffect (() =>{

        //11.1 creamos la function que va a llamar a la api
        const consultarAPI = async () => {

            //11.2 definimos la variable url
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            //11.3 definimos la variable resultado, recordar que el get nos trae la data desde la url con ayuda de axios que es un entorno para hacer llamados a enlaces http.
            const resultado = await axios.get(url)

            //12.1 usamos el useState para guardar las criptomonedas que traemos desde la api
            guardarCriptomonedas(resultado.data.Data)
        }

        //11.4 llamamos a la function dentro del useEffect
        consultarAPI()

    }, [])

    return ( 

        <form>

            {/* 5.4 usamos lo que se muestra en pantalla del custom hook, que es selectMonedas, como un componente */}
            <SelectMonedas/>

            {/* 10.2 renderizamos el custom hook, entender qeu aca ponemos selectcripto por que es lo que tiene el html en nuestro custom hook */}
            <SelectCripto/>

            {/* 4.1 importamos el componente creado con styled components */}
            <Boton
                type= 'submit'
                value= 'Calcular'
            />
        </form>
    );
}
 
export default Formulario;