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
    <Navbar bg={navColour} variant={navColour} >
      <Container>
        <Navbar.Brand as={Link} to="/">React-Template</Navbar.Brand>
          <Nav className="navitems">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/hooks">Hooks</Nav.Link>
        
              <div class="switch-holder">
                  <div class="switch-label">
                      <span>Dark Mode</span>
                  </div>
                  <div class="switch-toggle">
                      <input type="checkbox" id="darkmode" onChange={handleChangeChk}/>
                      <label for="darkmode"></label>
                  </div>
            </div>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default PgHeader;