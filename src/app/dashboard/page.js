"use client";

import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import SimpleLayout from '../components/SimpleLayout';
import axios from 'axios';
import '../globals.css';  // Import the global CSS

const Dashboard = () => {
  const [data, setData] = useState({
    totalPets: 0,
    totalSpecies: 0,
    totalBreeds: 0,
    totalOwners: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost/petsinfo/api/dashboard.php');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <SimpleLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Pets Information System Dashboard</h1>
        <Row className="g-4">
          {[
            { title: 'Total Pets', value: data.totalPets, color: 'info' },
            { title: 'Total Species', value: data.totalSpecies, color: 'success' },
            { title: 'Total Breeds', value: data.totalBreeds, color: 'warning' },
            { title: 'Total Owners', value: data.totalOwners, color: 'danger' }
          ].map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="mb-3 text-center card-text-white">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="display-4">{item.value}</Card.Text>
                  <Button className="button-custom" variant={item.color}>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SimpleLayout>
  );
};

export default Dashboard;
