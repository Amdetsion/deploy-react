import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabContainer from 'react-bootstrap/TabContainer';
import styled from 'styled-components';

export default function UncontrolledExample() {
  return (
    <Tabb>
      <Container className="conta">
        <Row>
          <Col sm={6}>
            <TabContainer className="tabss">
              <Tabs
                defaultActiveKey="vision"
                id="uncontrolled-tab-example"
                className="mb-2"
              >
                <Tab eventKey="vision" title="vision" className="tab-content">
                  <p className="par">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae odio porttitor, sodales metus sit amet, facilisis
                    orci. Mauris rutrum mi sit amet dolor eleifend molestie
                    condimentum non ex
                  </p>
                </Tab>
                <Tab eventKey="Mission" title="Mission" className="tab-content">
                  <p className="par">
                    Aenean et tincidunt purus. Nulla sodales erat nulla, eu
                    rhoncus ipsum vehicula eu. Mauris commodo id ligula eget
                    dignissim. Phasellus condimentum semper ligula, eu
                  </p>
                </Tab>
                <Tab
                  eventKey="objective"
                  title="objective"
                  className="tab-content"
                >
                  <p className="par">
                    Suspendisse faucibus, sem quis rutrum pretium, elit diam
                    bibendum mauris, a vestibulum tortor ante sed tellus.
                    Phasellus lacinia bibendum faucibus
                  </p>
                </Tab>
                <Tab
                  eventKey="Background"
                  title="Background"
                  className="tab-content"
                >
                  <p className="par">
                    Donec non ex lobortis, accumsan tortor ut, vehicula orci.
                    Praesent at vulputate libero. Quisque quis pharetra tortor.
                    Morbi nec ex gravida, vulputate tortor ut, blandit massa.
                    Proin tempor ante et arcu tristique, vel porta magna
                    euismod. Morbi placerat commodo diam sit amet elementum. Ut
                    imp
                  </p>
                </Tab>
                <Tab
                  eventKey="contact"
                  title="Contact"
                  className="tab-content"
                  disabled
                >
                  <h1>hiiiiii profile</h1>
                </Tab>
              </Tabs>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </Tabb>
  );
}

const Tabb = styled.div`
  .conta {
    width: 1000px;
    margin-top: 100px;
    margin-bottom: 200px;
    margin-left: 200px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .conta {
      width: 320px;
      margin-top: 100px;
      margin-bottom: 200px;
      margin-left: 30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .conta {
      width: 100%;
      margin-top: 100px;
      margin-bottom: 200px;
      margin-left: 30px;
    }
  }

  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: orangered;
    background-color: #fff;
    border-color: none;
    position: relative;
    top: -10px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
      color: orangered;
      background-color: #fff;
      border-color: none;
      position: relative;
      top: -10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
      color: orangered;
      background-color: #fff;
      border-color: none;
      position: relative;
      top: -10px;
    }
  }

  .nav-tabs {
    background-color: #d4f1f4;
    width: 800;
  }

  .nav-tabs .nav-link:hover {
    color: gray;
  }

  .tab-content {
    width: 800px;
    border-bottom: 0.8px solid #eaeff2;
    border-left: 0.8px solid #eaeff2;
    border-right: 0.8px solid #eaeff2;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .tab-content {
      width: 320px;
      border-bottom: 0.8px solid #eaeff2;
      border-left: 0.8px solid #eaeff2;
      border-right: 0.8px solid #eaeff2;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .tab-content {
      width: 700px;
      border-bottom: 0.8px solid #eaeff2;
      border-left: 0.8px solid #eaeff2;
      border-right: 0.8px solid #eaeff2;
    }
  }

  .par {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .par {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 50px;
      padding-top: 50px;
      font-size: 14px;
    }
  }
`;
