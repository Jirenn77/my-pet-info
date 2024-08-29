"use client";

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const SimpleNavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} href="/">Pets Info System</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} href="/dashboard">
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} href="/data-entry">
          Data Entry
        </Nav.Link>
        <Nav.Link as={Link} href="/view-pets">
          View Pets
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const SimpleLayout = ({ children }) => {
  return (
    <div className="bg-dark text-light min-vh-100">
      <SimpleNavBar />
      <Container className="mt-5">
        {children}
      </Container>
    </div>
  );
};

export default SimpleLayout;
