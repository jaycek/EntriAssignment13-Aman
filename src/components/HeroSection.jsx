import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <Container fluid className="hero-section bg-dark text-white d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100">
        <Col md={6} className="hero-image">
          
          <img src="logo.gif" alt="Portrait" className="img-fluid rounded" />
        </Col>
        <Col md={6} className="hero-content">
          <h1 className="display-3">
            My <span className="text-light">Portfolio</span>
          </h1>
          <p className="my-4">
          Hi, I'm Aman Sayooj – a Passionate React Developer! <br/><br/>
I'm a front-end developer with a focus on building engaging, high-performance web applications using React. 

Take a look at my projects to see how I turn complex problems into interactive, user-centered solutions!
          </p>
          <div>
            <Button variant="light" className="me-2">Explore Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
