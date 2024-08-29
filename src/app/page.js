"use client";

import React from 'react';
import SimpleLayout from './components/SimpleLayout';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

export default function Home() {
  return (
    <SimpleLayout>
      <Container fluid className="p-5">
        <Row className="text-center">
          <Col>
            <h1 className="display-3 mb-4">Welcome to the Pets Information System</h1>
            <p className="lead mb-4">Manage and view your pet information with ease.</p>
            <Button variant="warning" size="lg" as={Link} href="/dashboard">
              Go to Dashboard
            </Button>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  );
}
