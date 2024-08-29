"use client";

import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import SimpleLayout from '../components/SimpleLayout';
import '../globals.css';  // Import the global CSS

const ViewPets = () => {
  const [pets, setPets] = useState([]);
  const [filterOwner, setFilterOwner] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [filterBreed, setFilterBreed] = useState('');

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost/petsinfo/api/getPets.php');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleFilter = async () => {
    try {
      const response = await axios.get('http://localhost/petsinfo/api/getPets.php', {
        params: {
          owner: filterOwner,
          species: filterSpecies,
          breed: filterBreed,
        }
      });
      setPets(response.data);
    } catch (error) {
      console.error('Error filtering pets:', error);
    }
  };

  return (
    <SimpleLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">View Pets</h1>
        <Card className="p-4 mb-4">
          <Card.Body className='form-label-white'>
            <Form>
              <Form.Group controlId="filterOwner" className="mb-3">
                <Form.Label>Filter by Owner</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter owner's name"
                  value={filterOwner}
                  onChange={(e) => setFilterOwner(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="filterSpecies" className="mb-3">
                <Form.Label>Filter by Species</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter species"
                  value={filterSpecies}
                  onChange={(e) => setFilterSpecies(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="filterBreed" className="mb-3">
                <Form.Label>Filter by Breed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter breed"
                  value={filterBreed}
                  onChange={(e) => setFilterBreed(e.target.value)}
                />
              </Form.Group>
              <Button className="button-custom" onClick={handleFilter}>
                Apply Filters
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Species</th>
              <th>Breed</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.name}</td>
                <td>{pet.owner}</td>
                <td>{pet.species}</td>
                <td>{pet.breed}</td>
                <td>{pet.dob}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </SimpleLayout>
  );
};

export default ViewPets;
