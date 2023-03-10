import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Countups() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [counterOn, setcounterOn] = useState(false);
  return (
    <Counts>
      <div className="background">
        <Container>
          <ScrollTrigger
            onEnter={() => setcounterOn(true)}
            onExit={() => setcounterOn(false)}
          >
            <Row>
              <Col
                sm={3}
                className="amount"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1500"
              >
                <h2 className="header">
                  {' '}
                  {counterOn && <CountUp start={0} end={100} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">SOFTWARE</h3>
                </div>
              </Col>
              <Col
                sm={3}
                className="amounttwo"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1600"
              >
                <h2 className="header">
                  {counterOn && <CountUp start={0} end={80} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">HARDWARE</h3>
                </div>
              </Col>
              <Col
                sm={3}
                className="amounttwo"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1700"
              >
                <h2 className="header">
                  {counterOn && <CountUp start={0} end={110} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">CONSULTANCY</h3>
                </div>
              </Col>
            </Row>
            <Row className="rowtwo">
              <Col
                sm={3}
                className="amount"
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-duration="1800"
              >
                <h2 className="header">
                  {counterOn && <CountUp start={0} end={50} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">NETWORK</h3>
                </div>
              </Col>
              <Col
                sm={3}
                className="amounttwo"
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-duration="1900"
              >
                <h2 className="header">
                  {counterOn && <CountUp start={0} end={130} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">E-COMERCE</h3>
                </div>
              </Col>
              <Col
                sm={3}
                className="amounttwo"
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-duration="2000"
              >
                <h2 className="header">
                  {counterOn && <CountUp start={0} end={150} duration={5} />}+
                </h2>
                <div className="amountcolor">
                  <h3 className="classfication">Training</h3>
                </div>
              </Col>
            </Row>
          </ScrollTrigger>
        </Container>
      </div>
    </Counts>
  );
}

export default Countups;

const Counts = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  .background {
    background-image: url('anotheronetwo.jpg');
    background-repeat: no-repeat;
    margin-top: 0px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .background {
      background-image: url('');

      margin-top: 0px;

      width: 360px;
      margin-bottom: 100px;
    }
  }
  .amount {
    padding-left: 5px;
    padding-right: 5px;
    width: 160px;
    height: 180px;
    background-color: #4169e1;
    margin-left: 200px;
    padding-top: 20px;
    border-radius: 30px;
    margin-top: 50px;
  }

  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .amount {
      border-bottom: 5px solid black;
      padding-left: 5px;
      padding-right: 5px;
      width: 150px;
      background-color: #4169e1;
      margin-left: 100px;
      padding-top: 20px;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .amount {
      border-bottom: 5px solid black;
      padding-left: 5px;
      padding-right: 5px;
      width: 180px;
      background-color: #4169e1;
      margin-left: 50px;
      padding-top: 20px;
    }
  }
  .amountcolor {
    background-color: #6495ed;
    width: 160px;
    margin-left: -5px;
    height: 80px;
    margin-top: 45px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .amountcolor {
      background-color: #6495ed;
      width: 150px;
      margin-left: -5px;
      height: 80px;
      margin-top: 45px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .amountcolor {
      background-color: #6495ed;
      width: 180px;
      margin-left: -5px;
      height: 80px;
      margin-top: 45px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
  .header {
    color: white;
    padding-left: 40px;
  }

  .classfication {
    color: white;
    padding-left: 0px;
    font-size: 20px;
    padding-top: 25px;
  }

  .classficationthree {
    color: white;
    padding-left: 35px;
  }

  .amounttwo {
    padding-left: 5px;
    padding-right: 5px;
    width: 160px;
    height: 180px;
    background-color: #4169e1;
    margin-left: 100px;
    padding-top: 20px;
    border-radius: 30px;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .amounttwo {
      border-bottom: 5px solid black;
      padding-left: 5px;
      padding-right: 5px;
      width: 150px;
      background-color: #4169e1;
      margin-left: 100px;
      padding-top: 20px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .amounttwo {
      border-bottom: 5px solid black;
      padding-left: 5px;
      padding-right: 5px;
      width: 180px;
      background-color: #4169e1;
      margin-left: 50px;
      padding-top: 20px;
    }
  }

  .classficationthree {
    color: white;
    padding-left: 15px;
  }

  .rowtwo {
    margin-top: 70px;
  }
  @media only screen and (max-width: 360px) {
    .rowtwo {
      margin-top: -10px;
    }
  }
`;
