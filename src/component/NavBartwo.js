import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavBartwo() {
  return (
    <Naves>
      <Navbar className="nav-holder">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" navss">
              <Nav.Link
                href="#home"
                className="navsss"
                style={{ color: 'white' }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="navsss"
                style={{ color: 'white' }}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                href="/article"
                className="navsss"
                style={{ color: 'white' }}
              >
                PAGES
              </Nav.Link>
              <Nav.Link
                href="/contact "
                className="navsss"
                style={{ color: 'white' }}
              >
                CONTACT
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="navsss"
                style={{ color: 'white' }}
              >
                LINK
              </Nav.Link>
              <NavDropdown
                tyle={{ color: 'white' }}
                title="Dropdown"
                id="basic-nav-dropdown"
                s
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Naves>
  );
}

const Naves = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  .nav-holder {
    height: 70px;
    padding-left: 0px;
    background-color: #4169e1;
  }
  .navss {
    padding-left: 90px;
    color: white !important;
  }

  .navsss {
    margin-right: 45px;

    border-bottom: 0px solid red;
    transition: width 2s;
  }
  .navsss:hover {
    border-bottom: 2px solid white;

    transition-timing-function: ease-out;

    /* A litttttle slower on the way in */
    transition: 0.25s;

    /* Move into place */
    transform: translateY(0);
  }
`;
