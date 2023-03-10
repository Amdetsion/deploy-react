import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
function Headers() {
  return (
    <Soc>
      <Container>
        <Row>
          <Col sm={8} className="holders">
            <BsFacebook className="fac" />
            <BsInstagram className="ins" />
            <BsTwitter className="twi" />
          </Col>
          <Col sm={1} className="coll">
            <p>AMHARIC</p>
          </Col>
          <Col sm={1}>
            <p>ENGLISH</p>
          </Col>
        </Row>
      </Container>
    </Soc>
  );
}

export default Headers;

const Soc = styled.div`
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 0px;
  @media only screen and (max-width: 360px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 414px) {
    margin-left: 100px;
  }
  .fac {
    font-size: 55px;
    color: #c13584;
    padding-left: -10px;
  }
  .fac:hover {
    color: #000080;
  }

  .ins {
    font-size: 33px;
    color: #c13584;
    padding-left: 10px;
  }
  .ins:hover {
    color: #6f4e37;
  }
  .twi {
    font-size: 33px;
    color: #00b9ff;
    padding-left: 10px;
  }
  .twi:hover {
    color: #0818a8;
  }
  .coll {
  }
`;
