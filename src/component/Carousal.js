import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import amdeone from '../img/amdeone.jpg';
import amdetwo from '../img/amdetwo.jpg';
import amdethree from '../img/amdethree.jpg';
import mycarou from '../img/my-carousal.jpg';
import mysecond from '../img/my-second.jpg';
export default function Carousal() {
  return (
    <Car>
      <Container>
        <Row>
          <Col sm={8} className="firstRow">
            <Carousel className="carousal-size">
              <Carousel.Item interval={1000}>
                <img className="img-car" src={mysecond} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="img-car" src={amdetwo} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-car" src={mycarou} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col sm={4} className="accordianholder">
            {' '}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="acc-adv">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body className="bodys">
                  <p className="parg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue sit amet nulla non elementum. Sed facilisis
                    nulla quis purus pellentesque, id eleifend augue finibus.
                    Suspendisse vestibulum tempor arcu, at scelerisque neque
                    mattis ut. Donec placerat venenatis nunc. Aenean condimentum
                    odio vel sapien tempus, ut suscipit arcu tristique. Quisque
                    commodo magna a arcu pretium dignissim.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="acc-adv">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body className="bodys">
                  <p className="parg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue sit amet nulla non elementum. Sed facilisis
                    nulla quis purus pellentesque, id eleifend augue finibus.
                    Suspendisse vestibulum tempor arcu, at scelerisque neque
                    mattis ut. Donec placerat venenatis nunc. Aenean condimentum
                    odio vel sapien tempus, ut suscipit arcu tristique. Quisque
                    commodo magna a arcu pretium dignissim.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="acc-adv">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body className="bodys">
                  <p className="parg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent congue sit amet nulla non elementum. Sed facilisis
                    nulla quis purus pellentesque, id eleifend augue finibus.
                    Suspendisse vestibulum tempor arcu, at scelerisque neque
                    mattis ut. Donec placerat venenatis nunc. Aenean condimentum
                    odio vel sapien tempus, ut suscipit arcu tristique. Quisque
                    commodo magna a arcu pretium dignissim.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Car>
  );
}

const Car = styled.div`
  margin-top: 15px;
  margin-right: 0x;
  margin-left: 0px;
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .firstRow {
      margin-top: 0px;
      margin-right: 0x;
      margin-left: 0px;
      margin-bottom: 50px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410) {
    .firstRow {
      margin-top: 0px;
      margin-right: 0x;
      margin-left: 0px;
    }
  }
  .img-car {
    width: 800px;
    height: 600px;
  }

  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .img-car {
      width: 330px;
      margin-left: 100px;
      height: 150px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .img-car {
      width: 350px;
      margin-left: 60px;
      height: 350px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .img-car {
      width: 350px;
      margin-left: 60px;
      height: 350px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .img-car {
      width: 700px;
      margin-left: 60px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .accordianholder {
      width: 300px;
      margin-left: 10px;
      margin-right: 50px;
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 490px) {
    .accordianholder {
      width: 300px;
      margin-left: 40px;
      margin-right: 50px;
      margin-top: 50px;
    }
  }

  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .accordianholder {
      width: 300px;
      margin-left: -100px;

      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .accordianholder {
      width: 400px;
      margin-left: 160px;
      margin-right: -70px !important;
      margin-top: 50px;
    }
  }

  @media only screen and (min-width: 360px) and(max-width: 370px) {
    .acc-adv {
      width: 300px;
      margin-left: -20px;
    }
  }
  @media only screen and (min-width: 370px) and(max-width: 410px) {
    .acc-adv {
      width: 300px;
      margin-left: -20px;
    }
  }
  @media only screen and (min-width: 414px) and(max-width: 490px) {
    .acc-adv {
      width: 300px;
      margin-left: -20px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .acc-adv {
      width: 300px;
      margin-left: -20px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .acc-adv {
      width: 350px;
      margin-left: 100 px;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .bodys {
      padding-left: 30px;
      padding-right: 30px;
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 414px) and(max-width:490px) {
    .bodys {
      padding-left: 30px;
      padding-right: 30px;
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 768px) and(max-width:1000px) {
    .bodys {
      padding-left: 30px;
      padding-right: 30px;
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .carousal-size {
      width: 360;
      margin-left: -90px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .carousal-size {
      width: 360;
      margin-left: -40px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .carousal-size {
      width: 400px;
      margin-left: -40px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .carousal-size {
      width: 700px;
      margin-left: -40px;
    }
  }

  @media only screen and (min-width: 360px) and(max-width:370px) {
    .accordianholder {
      margin-left: 30px;
    }
  }
  @media only screen and (min-width: 375px) and(max-width:410px) {
    .accordianholder {
      margin-left: 30px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .accordianholder {
      margin-left: 30px;
    }
  }
  .parg {
    font-size: 14px;
    text-align: left;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .parg {
      font-size: 12px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 410px) {
    .parg {
      font-size: 12px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .parg {
      font-size: 12px;
      text-align: left;
    }
  }
`;
