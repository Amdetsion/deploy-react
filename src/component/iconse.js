import { Si1001Tracklists } from 'react-icons/si';
import { SiAirplayvideo } from 'react-icons/si';

import { SiAsciinema } from 'react-icons/si';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useState, useEffect } from 'react';

export default function iconse() {
  return (
    <Icons>
      <Container>
        <Row className="rowone">
          <Col sm={4} className="colone" data-aos="fade-up">
            <div className="hhhh">
              <Si1001Tracklists className="track" />
            </div>
            <h4 className="tracks">566</h4>
          </Col>

          <Col sm={4} className="coltwo" data-aos="fade-up">
            <div className="hhhh">
              <SiAirplayvideo className="video" />
            </div>

            <h4 className="videos">566</h4>
          </Col>

          <Col sm={4} className="collthree" data-aos="fade-up">
            <div className="hhhh">
              <SiAsciinema className="cinema" />
            </div>
            <h4 className="cinemas">566</h4>
          </Col>
        </Row>
        <Row className="rowtwo">
          <Col sm={4} className="collfour" data-aos="fade-up">
            <div className="hhhh">
              <Si1001Tracklists className="track" />
            </div>

            <h4 className="tracks">566</h4>
          </Col>
          <Col sm={4} className="collfive" data-aos="fade-up">
            <div className="hhhh">
              <SiAirplayvideo className="video" />
            </div>
            <h4 className="videos">566</h4>
          </Col>
          <Col sm={4} className="collsix" data-aos="fade-up">
            <div className="hhhh">
              <SiAsciinema className="cinema" />
            </div>
            <h4 className="cinemas">566</h4>
          </Col>
        </Row>
      </Container>
    </Icons>
  );
}
const Icons = styled.div`
  margin-top: 100px;
  .track {
    font-size: 90px;
    margin-left: 30px;
    color: #6ee96e;
    border-bottom: 2px #6ee96e solid;
  }
  .tracks {
    margin-left: 110px;
    padding-top: 40px;
  }
  .video {
    font-size: 90px;
    padding-left: 30px;

    color: #0e86d4;
  }
  .videos {
    padding-left: 100px;
    padding-top: 40px;
  }
  .cinema {
    font-size: 90px;
    padding-left: 30px;
    color: #4169e1;
  }
  .cinemas {
    padding-left: 100px;
    padding-top: 40px;
  }
  .rowone {
    padding-top: 70px;
  }
  .rowtwo {
    padding-top: 50px;
    padding-bottom: 40px;
  }
  .coltwo {
    padding-left: 20px;

    background-color: #f5f5f5;
    width: 300px;
    margin-left: 60px;
  }

  .collfive {
    padding-left: 20px;
    background-color: #f5f5f5;
    width: 300px;
    margin-left: 60px;
    border-bottom: 4px solid #4169e1;
  }
  .collsix {
    column-gap: 20px;
    background-color: #f5f5f5;
    margin-left: 60px;
    width: 300px;
    border-bottom: 4px solid #4169e1;
  }
  .colone {
    background-color: #f5f5f5;
    margin-left: 60px;
    width: 300px;
    border-bottom: 4px solid #4169e1;
  }
  .collthree {
    background-color: #f5f5f5;
    margin-left: 60px;
    width: 300px;
    border-bottom: 4px solid #4169e1;
  }
  .collfour {
    background-color: #f5f5f5;

    margin-left: 60px;
    width: 300px;
    border-bottom: 4px solid #4169e1;
  }
  .hhhh {
    padding-left: 70px;
    padding-top: 40px;
  }
`;
