import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg={scrolled ? "dark" : "dark"} 
      variant="dark"
      expand="lg"
      sticky="top"
      className={`mb-4 py-3 transition-navbar ${scrolled ? "scrolled-navbar" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image
            src="logo.jpg"
            roundedCircle
            width="40"
            height="40"
            className="me-2"
          />
          <h5 className="mb-0">AMAN SAYOOJ.K</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-uppercase fw-bold text-light mx-2 transition-link">
              Home
            </Nav.Link>
            <Nav.Link href="#photo" className="text-uppercase fw-bold text-light mx-2 transition-link">
              Photo
            </Nav.Link>
            <Nav.Link href="#about" className="text-uppercase fw-bold text-light mx-2 transition-link">
              About Me
            </Nav.Link>
            <Nav.Link href="#contact" className="text-uppercase fw-bold text-light mx-2 transition-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
