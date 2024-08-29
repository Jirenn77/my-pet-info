"use client";

import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import SimpleLayout from '../components/SimpleLayout';
import axios from 'axios';
import '../globals.css';  // Import the global CSS

const DataEntry = () => {
  const [petName, setPetName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [speciesId, setSpeciesId] = useState('');
  const [breedId, setBreedId] = useState('');
  const [dob, setDob] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddPet = async () => {
    try {
      const response = await axios.post('http://localhost/petsinfo/api/add_pet.php', {
        petName,
        ownerId,
        speciesId,
        breedId,
        dob
      });

      if (response.data.status === 'success') {
        setSuccessMessage('Pet added successfully!');
        setPetName('');
        setOwnerId('');
        setSpeciesId('');
        setBreedId('');
        setDob('');
      } else {
        setSuccessMessage('Failed to add pet.');
      }
    } catch (error) {
      console.error('Error adding pet:', error);
      setSuccessMessage('An error occurred.');
    }
  };

  return (
    <SimpleLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Add New Pet</h1>
        <Card className="p-4">
          <Card.Body className='form-label-white'>
            <Form>
              <Form.Group controlId="petName" className="mb-3">
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pet name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="ownerId" className="mb-3">
                <Form.Label>Owner ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter owner ID"
                  value={ownerId}
                  onChange={(e) => setOwnerId(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="speciesId" className="mb-3">
                <Form.Label>Species ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter species ID"
                  value={speciesId}
                  onChange={(e) => setSpeciesId(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="breedId" className="mb-3">
                <Form.Label>Breed ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter breed ID"
                  value={breedId}
                  onChange={(e) => setBreedId(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="dob" className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>
              <Button className="button-custom" onClick={handleAddPet}>
                Add Pet
              </Button>
              {successMessage && <p className="mt-3 text-success">{successMessage}</p>}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </SimpleLayout>
  );
};

export default DataEntry;
