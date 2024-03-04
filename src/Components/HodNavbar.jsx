// HodNavbar.jsx
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import LogoImage from './logo.jpeg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const HodNavbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/hodhome'); // Update the route to hodhome
  };

  const handleManageLeaveClick = () => {
    navigate('/manageleave');
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="navbar sticky-top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand" onClick={handleHomeClick}>
          <img
            alt="Your Logo"
            src={LogoImage}
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
          {'LeaveEase'}
        </BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={handleManageLeaveClick}>Manage Leave</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default HodNavbar;
