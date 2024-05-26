import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InitialOptions = () => {
  return (
    <Container className="mt-5 ">
      <h2>Escolha sua Ação:</h2>
      <p>Selecione uma das opções abaixo para começar a apostar:</p>
      <Button as={Link} to="/bet" variant="primary" className="me-3">Apostar</Button>
      <Button as={Link} to="/results" variant="secondary">Ver Resultados</Button>
    </Container>
  );
};

export default InitialOptions;

