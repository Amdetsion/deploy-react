import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Clock from './Clock';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

export default function Letter() {
  const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <Let>
      <Container className="allcontainer">
        <Row>
          <Col sm={6} className="timer-holder">
            <div className="timer-holderss">
              <h1 className="timerheader">Countdown Timer</h1>
            </div>
            <CountdownTimer
              targetDate={dateTimeAfterThreeDays}
              className="days"
            />
          </Col>
          <Col sm={6} className="Parholder">
            <div className="tp">
              <h2 className="title">TiTle</h2>
              <div className="shapeparagraph">
                <p className="par">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a mi eu odio lobortis commodo eget at quam. Donec ac ante
                  vitae massa porta lobortis. Nullam porttitor nisi risus, id
                  luctus velit lacinia ac. Proin semper convallis malesuada.
                  Etiam quis pellentesque ante. Nam id velit ac mi congue
                  interdum rhoncus eu augue. Praesent ac ornare metus, lacinia
                  viverra risus. Aliquam lacinia felis nec nibh tempor rutrum.
                  Praesent a maximus lorem, vitae consequat quam. Aliquam vitae
                  felis at purus posuere .{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Let>
  );
}

const Let = styled.div`
  padding-top: 100px;
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .allcontainer {
    background-image: url('anotherone.jpg');
    margin-left: 0px;
    margin-right: -100px;
    width: 1350px;
  }
  .Parholder {
  }
  @media only screen and (min-width: 360px) and (max-width: 414px) {
    .Parholder {
      margin-top: -120px;
    }
  }
  .par {
    padding-left: 40px;
    padding-right: 20px;
    text-align: left;
    font-size: 16px;
    padding-top: 50px;
    padding-bottom: 80px;
    color: #36454f;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .par {
      padding-left: 0px;
      padding-right: 30px;
      text-align: left;
      font-size: 13px;
      padding-top: -100px;
      margin-left: 40px;
      margin-right: 50px;
      width: 300px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .par {
      padding-left: 30px;
      padding-right: 30px;
      text-align: left;
      font-size: 13px;
      padding-top: -40px;
    }
  }

  .tp {
  }
  @media only screen and (min-width: 360px) and (max-width: 414px) {
    .tp {
      border: 0.5px #4169e1;
      width: 100%;
    }
  }

  .title {
    padding-left: 0px;
    padding-top: 30px;
    color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 410px) {
    .title {
      margin-left: -1000px;
      padding-top: 30px;
      color: #4169e1;
      font-size: 25px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .title {
      margin-left: -1000px;
      padding-top: 30px;
      color: #4169e1;
      font-size: 25px;
    }
  }

  .buut {
    color: blue;
    padding-left: 230px;
    padding-bottom: 50px;
    width: 60px;
  }
  .timer-holder {
    margin-top: 150px;
    margin-bottom: 100px;
  }
  .timer-holderss {
    border-bottom: 2px solid #4169e1;
    margin-left: 60px;
  }

  .timerheader {
    color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 410px) {
    .timerheader {
      color: #4169e1;
      font-size: 22px !important;
      margin-top: 50px;
      margin-left: 0px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .timerheader {
      color: #4169e1;
      font-size: 22px !important;
      margin-top: 50px;
      margin-left: -1000px;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 410px) {
    .timer-holderss {
      margin-top: -200px;
      border-bottom: 2px solid #4169e1;
      margin-bottom: 30px;
      margin-left: 20px;
      width: 300px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 490px) {
    .timer-holderss {
      margin-top: -170px;
      border-bottom: 2px solid #4169e1;
      margin-bottom: 30px;
      margin-left: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .timer-holderss {
      border-bottom: 2px solid #4169e1;
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 414px) {
    .days {
      margin-left: 45px;
    }
  }
  .shapeparagraph {
    background-color: #faf9f6;
    margin-top: 50px;
    border-top-left-radius: 60px;
  }
  @media only screen and (min-width: 360px) and (max-width: 410px) {
    .shapeparagraph {
      background-color: #faf9f6;
      margin-top: 50px;
      border-top-left-radius: 60px;
      width: 300px;
    }
  }
  @media only screen and (min-width: 411px) and (max-width: 490px) {
    .shapeparagraph {
      background-color: #faf9f6;
      margin-top: 50px;
      border-top-left-radius: 60px;
      width: 300px;
      margin-left: 50px;
    }
  }
`;
