import React from 'react';

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mernstack from '../img/mernstack.png';
import Photoshop from '../img/photoshop.png';
import Logo from '../img/logo.jpg';
export default function News() {
  return (
    <New>
      <Container className="conta">
        <Row className="rowss">
          <Col sm={4}>
            <Card className="cards">
              <Card.Img variant="top" className="new-img" src={Mernstack} />
              <Card.Body className="news-body">
                <Card.Title className="cardtitle">Card Title</Card.Title>
                <Card.Text>
                  <div className="cardtexts">
                    <p className="cardtext">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardsone">
              <Card.Img variant="top" className="new-img" src={Logo} />
              <Card.Body className="news-body">
                <Card.Title className="cardtitle">this is title</Card.Title>
                <Card.Text>
                  <div className="cardtexts">
                    <p className="cardtext">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardstwo">
              <Card.Img variant="top" className="new-img" src={Photoshop} />
              <Card.Body className="news-body">
                <Card.Title className="cardtitle">Card Title</Card.Title>
                <Card.Text>
                  <div className="cardtexts">
                    <p className="cardtext">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s
                    </p>
                  </div>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </New>
  );
}

const New = styled.div`
  margin-top: 100px;
  .new-img {
    height: 50px;
  }
  @media only screen and (max-width: 360px) {
  }
  .new-img {
    height: 300px;
    width: 250px;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 360px) and (max-width: 494px) {
    .new-img {
      height: 200px;
      width: 200px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .new-img {
      height: 150px;
      width: 190px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
      margin-bottom: 30px;
    }
  }

  .cards {
    width: 18rem;
    background-color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 414px) {
    .cards {
      width: 13rem;
      margin-bottom: 50px;
      margin-left: 35px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .cards {
      width: 13rem;
      margin-bottom: 50px;
      margin-left: 0px;
    }
  }
  .cardsone {
    width: 18rem;
    background-color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .cardsone {
      width: 13rem;
      margin-top: 50px;
      margin-left: 35px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .cardsone {
      width: 12rem;
      margin-top: 0px;
      margin-left: 35px;
    }
  }

  .cardstwo {
    width: 18rem;
    background-color: #4169e1;
  }

  @media only screen and (min-width: 360px) and (max-width: 414px) {
    .cardstwo {
      width: 13rem;
      margin-bottom: 50px;
      margin-left: 35px;
      padding-bottom: 50px;
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .cardstwo {
      width: 12rem;
      margin-bottom: 50px;
      margin-left: 35px;

      margin-top: 0px;
    }
  }

  .news-body {
    color: #4169e1;
    background-color: #4169e1;
  }
  .cards:hover {
    position: relative;
    top: -5px;
  }
  .conta {
    padding-left: 40px;
  }
  .cardtitle {
    color: white;
  }
  .cardtext {
    color: white;
    margin-top: 15px;
    font-size: 14px;
  }
  .cardtexts {
    border-top: 0.5px solid white;
  }
`;
