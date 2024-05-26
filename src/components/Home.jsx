// src/components/Home.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InitialOptions from './InitialOptions';
import MinhaNavBar from './MinhaNavBar';

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='mb-5'>
        <MinhaNavBar />
      </Navbar>
      <Container className="mt-5">
        <InitialOptions />
      </Container>  
    </div>
  );
};

export default Home;
