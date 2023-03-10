import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Letter from './Letter';

export default function Welcome() {
  return (
    <Wel>
      <Container fluid cla>
        <Letter />
      </Container>
    </Wel>
  );
}
const Wel = styled.div`
  margin-top: 20px;
`;
