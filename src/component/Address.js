import React from 'react';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Address() {
  return (
    <Addre>
      <div className="all">
        <Container className="tel-con">
          <Row>
            <Col sm={2}>
              <BsFillTelephonePlusFill className="telphone" />
            </Col>
            <Col sm={4}>
              <p>+251912736731</p>
            </Col>
          </Row>
        </Container>
        <Container className="con-envlop">
          <Row>
            <Col sm={2}>
              <BsEnvelopeFill className="envlop" />
            </Col>
            <Col sm={4}>
              <p>EMAIL Address</p>
            </Col>
          </Row>
        </Container>
        <Container className="cont-face">
          <Row>
            <Col sm={2}>
              <BsFacebook className="face" />
            </Col>
            <Col sm={4}>
              <p>Facebook Account</p>
            </Col>
          </Row>
        </Container>
        <Container className="con-insta">
          <Row>
            <Col sm={2}>
              <BsInstagram className="insta" />
            </Col>
            <Col sm={4}>
              <p>Instagram Account</p>
            </Col>
          </Row>
        </Container>
        <Container className="con-twitt">
          <Row>
            <Col sm={2}>
              <BsTwitter className="twitt" />
            </Col>
            <Col sm={4}>
              <p>TWITEER ACCOUNT</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Addre>
  );
}

const Addre = styled.div`
  margin-bottom: 100px;
  overflow-x: hidden;
  .all {
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .all {
      margin-left: -170px;
      margin-top: -200px;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    margin-top: 0px;
  }
  .telphone {
    font-size: 25px;
    color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .telphone {
      font-size: 25px;
      color: #4169e1;
      margin-top: 0px;
    }
  }
  .envlop {
    font-size: 25px;
    color: #4169e1;
  }
  .insta {
    font-size: 25px;
    color: #4169e1;
  }
  .face {
    font-size: 25px;
    color: #4169e1;
  }
  .twitt {
    font-size: 25px;
    color: #4169e1;
  }
  .tel-con {
    margin-left: 110px;
    margin-top: 200px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .tel-con {
      margin-left: 110px;
      margin-top: 200px;
    }
  }
  .con-envlop {
    margin-left: 110px;
    margin-top: 30px;
  }
  .cont-face {
    margin-left: 110px;
    margin-top: 30px;
  }
  .con-insta {
    margin-left: 110px;
    margin-top: 30px;
  }
  .con-twitt {
    margin-left: 110px;
    margin-top: 30px;
  }
`;
