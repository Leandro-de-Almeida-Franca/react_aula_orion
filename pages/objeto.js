import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const objeto = () => {

    const carros = [
        "Civic",
        "Tucson",
        "Celta",
        "Tempra",
        "Marea",
        "Doblo"
    ]


  return (
    <>
    <Pagina titulo="objetos">
        <Container>
            <h1>Lista Ordenada</h1>
            <ol>
          {carros.map(item => (
            <li>{item}</li>
           ))}
           </ol>

        </Container>
    </Pagina>
    </>
  )
}

export default objeto