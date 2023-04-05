import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sistema Academico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Alunos</Nav.Link>
            <Nav.Link href="#features">Professores</Nav.Link>
            <Nav.Link href="#pricing">Notas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Cabecalho