// HodNavbar.jsx
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import LogoImage from './logo.jpeg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const HodNavbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/hodhome');
  };

  const handleStaffClick = () => {
    navigate('/Hodstaff');
  };

  const handleLeaveClick = (status) => {
    navigate(`/manageleave/${status}`);
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
          <Nav.Link onClick={handleStaffClick}>Staff</Nav.Link>
          <NavDropdown title="Manage Leave" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleLeaveClick('approved')}>Approved Leaves</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLeaveClick('declined')}>Declined Leaves</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLeaveClick('pending')}>Pending Leaves</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default HodNavbar;
