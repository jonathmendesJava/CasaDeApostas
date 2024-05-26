// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Logo do Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Adicione aqui os links do NavBar, como por exemplo: */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Nav>
            <Button variant="outline-light">Login</Button>
            <Button variant="light" className="ms-2">Registrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
