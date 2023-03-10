import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Social';

export default function Footer() {
  return (
    <Fuck>
      <div className="contai">
        <Container>
          <Row>
            <Col className="footerlogo">
              <Header />
            </Col>
          </Row>
          <div className="rowsborder">
            <Row className="secondcol">
              <Col>
                <h5 className="headerone">
                  <u className="under">LINK</u>
                </h5>
                <p className="linkss">LINK-ONE</p>
                <p className="linkss">LINK-TWO</p>
                <p className="linkss">LINK-THREE</p>
                <p className="linkss">LINK-FOUR</p>
              </Col>
              <Col className="coltwo">
                <h5 className="headerone">
                  <u className="under">LINK</u>
                </h5>
                <p className="linkss">LINK-ONE</p>
                <p className="linkss">LINK-TWO</p>
                <p className="linkss">LINK-THREE</p>
                <p className="linkss">LINK-FOUR</p>
              </Col>
              <Col className="colthree">
                <h5 className="headerone">
                  <u className="under">LINK</u>
                </h5>
                <p className="linkss">LINK-ONE</p>
                <p className="linkss">LINK-TWO</p>
                <p className="linkss">LINK-THREE</p>
                <p className="linkss">LINK-FOUR</p>
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="secondrow">
              <p className="copy">
                &copy;{new Date().getFullYear()} AAMBACHEW | All rights reserved
                | Terms Of Service | Privacy
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fuck>
  );
}

const Fuck = styled.div`
  margin-top: 0px;
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .contai {
    background-image: url('footertwo.jpg');
    border-radius: 5px;
    margin-left: 0px;
    margin-right: 0px;
    width: 1258px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .contai {
      background-color: #4169e1;
      border-radius: 5px;
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .contai {
      background-color: #4169e1;
      border-radius: 5px;
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
    }
  }

  .headerone {
    color: white;
  }
  .under {
  }
  .colthree {
    margin-left: -350px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .colthree {
      margin-left: -50px;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .colthree {
      margin-left: 800px;
      margin-top: -180px;
    }
  }
  .coltwo {
    margin-left: -350px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .coltwo {
      margin-left: -50px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .coltwo {
      margin-left: 0px;
    }
  }
  .secondrow {
    border-top: 2px solid white;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .secondrow {
      margin-left: -700px;
    }
  }

  .copy {
    padding-left: -300px;
  }
  .secondcol {
    padding-top: 35px;
    margin-left: 0px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .secondcol {
      margin-left: -120px;
      width: 300px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .secondcol {
      margin-left: 0px;
      width: 300px;
    }
  }
  .footerlogo {
    margin-left: -200px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .footerlogo {
      margin-left: -940px;
      width: 300px;
    }
  }
  .colfour {
    margin-left: -350px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .colfour {
      margin-top: -180px;
      margin-left: 550px;
    }
  }
  .rowsborder {
    border-left: 0px solid white;
    border-right: 0px solid white;

    width: 800px;
    margin-top: 30px;
    margin-left: 100px;

    margin-left: 150px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .rowsborder {
      border-left: 0px solid white;
      border-right: 0px solid white;

      width: 800px;
      margin-top: 30px;
      margin-left: 100px;

      margin-left: 150px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .rowsborder {
      border-left: 0px solid white;
      border-right: 0px solid white;

      width: 800px;
      margin-top: 30px;
      margin-left: 100px;

      margin-left: 150px;
    }
  }
  .linkss {
    color: #f9f6ee;
    font-size: 14px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .linkss {
      color: #f9f6ee;
      font-size: 9px;
    }
  }
  .copy {
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .copy {
      font-size: 10px;
      padding-left: -50px;
    }
  }
`;
