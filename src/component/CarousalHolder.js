import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import React from 'react'
import Carousal from './Carousal';
import Advertsisment from './Advertsisment';
export default function CarousalHolder(){
 return(
    <Container>
            
            <Row>
        <Col sm={8}><Carousal/></Col>
        <Col sm={4}><Advertsisment/></Col>
      </Row>


    </Container>




 )
}

