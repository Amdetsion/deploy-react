import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NavBars() {
  return (
    <Naves>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </head>
      <Navbar className="nav-holder" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            Amde-Ambachew
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggg" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapseholders">
            <div></div>
            <Nav className="me-auto navss">
              <Nav.Link href="/" className="navsss">
                <div className="homey">Home</div>
              </Nav.Link>

              <Nav.Link href="about" className="navsss">
                <div className="abouty">ABOUT</div>
              </Nav.Link>
              <Nav.Link href="article" className="navsss">
                <div className="pagey">PAGES</div>
              </Nav.Link>
              <Nav.Link href="contact" className="navsss">
                <div className="contacty">CONTACT</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Naves>
  );
}

const Naves = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .nav-holder {
    height: 70px;
    padding-left: 0px;
    background-image: url('header.jpg');
    border-radius: 10px;
    width: 1000px;
    margin-left: 130px;
    margin-right: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .nav-holder {
      height: 70px;
      padding-left: 0px;
      background-color: #4169e1;
      border-radius: 10px;
      width: 100%;
      margin-left: 0px;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .nav-holder {
      height: 70px;
      padding-left: 0px;
      background-color: #4169e1;
      border-radius: 10px;
      width: 375px;
      margin-left: 0px;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .nav-holder {
      height: 70px;
      padding-left: 0px;
      background-color: #4169e1;
      border-radius: 10px;
      width: 99%;
      margin-left: 0px;
      margin-top: 0px;
      margin-right: 0px;
    }
  }
  @media only screen and (min-width: 491px) and (max-width: 600px) {
    .nav-holder {
      height: 70px;
      padding-left: 0px;
      background-color: #4169e1;
      border-radius: 10px;
      width: 100%;
      margin-left: -100px;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .nav-holder {
      height: 70px;
      padding-left: 0px;
      background-color: #4169e1;
      border-radius: 10px;
      width: 100%;
      margin-left: 0px;
    }
  }
  .toggg {
    color: white;
    margin-right: 10px;
  }
  .collapseholders {
    margin-left: 0px;
    margin-right: 0px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .collapseholders {
      margin-left: -10px;
      margin-right: 0px;
      width: 360px;
      position: absolute;
      z-index: 1;
      margin-top: 300px;
      background-color: #4169e1;
      height: 250px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .collapseholders {
      margin-left: -10px;
      margin-right: 0px;
      width: 375px;
      position: absolute;
      z-index: 1;
      margin-top: 300px;
      background-color: #4169e1;
      height: 250px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .collapseholders {
      margin-left: -10px;
      margin-right: 0px;
      width: 414px;
      position: absolute;
      z-index: 1;
      margin-top: 300px;
      background-color: #4169e1;
      height: 250px;
    }
  }
  @media only screen and (min-width: 491px) and (max-width: 600px) {
    .collapseholders {
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
      position: absolute;
      z-index: 1;
      margin-top: 300px;
      background-color: #4169e1;
      height: 250px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .collapseholders {
      margin-left: -40px;
      margin-right: 0px;
      width: 100%;
      position: absolute;
      z-index: 1;
      margin-top: 300px;
      background-color: #4169e1;
      height: 250px;
    }
  }
  .navss {
    padding-left: 150px;
    color: white !important;
  }
  .homey {
    border-bottom: 0.5px solid white;
    margin-top: 0px;

    color: white !important;
    font-size: 17px;
  }
  @media only screen and (min-width: 360px) and (max-width: 414px) {
    .homey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .homey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 600px) {
    .homey {
      border-bottom: 0.5px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .homey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  .abouty {
    border-bottom: 0.5px solid white;
    margin-top: 0px;

    color: white !important;
    font-size: 17px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .abouty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .abouty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 600px) {
    .abouty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .abouty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  .pagey {
    border-bottom: 0.5px solid white;
    margin-top: 0px;

    color: white !important;
    font-size: 17px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .pagey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .pagey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 600px) {
    .pagey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .pagey {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  .contacty {
    border-bottom: 0.5px solid white;
    margin-top: 0px;

    color: white !important;
    font-size: 17px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .contacty {
      border-bottom: 0.5px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .contacty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 600px) {
    .contacty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .contacty {
      border-bottom: 2px solid white;
      margin-top: 0px;
      margin-left: -150px;
      background-color: #4169e1;
      color: white !important;
      font-size: 17px;
    }
  }
  .brand {
    margin-left: 30px;
  }
`;
