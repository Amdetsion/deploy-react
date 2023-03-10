import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

export default function Social() {
  return (
    <Soc>
      <Container>
        <Row>
          <Col className="holders" sm={12}>
            <BsFacebook className="fac" />

            <BsInstagram className="ins" />
            <BsTwitter className="twi" />
          </Col>
        </Row>
      </Container>
    </Soc>
  );
}

const Soc = styled.div`
  .fac {
    color: white;
    margin-left: 450px;
    font-size: 30px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 360px) {
    .fac {
      color: white;
      margin-left: 200px;
      font-size: 20px;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 360px) {
    .ins {
      margin-top: 20px;
      color: #3b5998;
      margin-left: 0px;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 360px) {
    .twi {
      margin-top: 20px;
      color: white;
      margin-left: 0px;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 360px) {
    .holders {
      margin-left: 100px;
    }
  }

  .twi {
    margin-top: 20px;
    color: white;
    margin-left: 15px;
    font-size: 30px;
  }
  .ins {
    margin-top: 20px;
    color: white;
    margin-left: 15px;
    font-size: 30px;
    border-radius: 30;
  }
`;
