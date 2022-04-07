import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

const PgHeader = () => {
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Template</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PgHeader;