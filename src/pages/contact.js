import React from 'react';
import ContactForm from '../component/ContactForum';
import Address from '../component/Address';
import NavBartwo from '../component/NavBars';
import Header from '../component/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Footer from '../component/Footer';
export default function contact() {
  return (
    <Contactp>
      <NavBartwo />

      <Container className="conta">
        <Row className="rowss">
          <Col sm={6}>
            <ContactForm />
          </Col>
          <Col sm={6}>
            <Address />
          </Col>
        </Row>
      </Container>
      <div className="outfooter">
        <Footer />
      </div>
    </Contactp>
  );
}

const Contactp = styled.div`
  overflow-x: hidden;
  .outfooter {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    width: 1800px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .outfooter {
      margin-top: 0px;
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
    }
  }
`;
