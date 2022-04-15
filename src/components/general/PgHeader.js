import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

const PgHeader = ({toggleDark}) => {
  const [navColour, setNavColour] = useState('light')
  const handleChangeChk = () =>{
    if(navColour === 'light'){
    setNavColour('dark');}
    else{
      setNavColour('light')
    }
    toggleDark();
  }
  return(
    <Navbar bg={navColour} expand="lg" variant={navColour} >
      <Container>
        <Navbar.Brand as={Link} to="/">React-Template</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/hooks">Hooks</Nav.Link>
              <div class="switch-holder">
                  <div class="switch-toggle">
                      <input type="checkbox" id="darkmode" onChange={handleChangeChk}/>
                      <label for="darkmode"></label>
                  </div>
            </div>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PgHeader;