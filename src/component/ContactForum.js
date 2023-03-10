import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BodyText } from 'react-bootstrap-icons';

import { useState } from 'react';

import { add } from 'date-fns';
import React, { useRef } from 'react';
const sizes = {
  mobileS: '360px',
  mobileM: '375px',
  mobileL: '414px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default function ContactForum() {
  const showAlert = () => {
    alert('Message sent Successfully ');
  };

  return (
    <Contacts>
      <Container>
        <Row className="rowss">
          <Col sm={6}>
            <div className="holder">
              <Form onSubmit={showAlert}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <div className="lables"> Email address </div>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="contact"
                    name="user_email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <div className="lables">NAME</div>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    className="contactpass"
                    name="user_name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <div className="lables"> MESSAGE</div>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    className="textarea"
                    name="message"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Check me out"
                    className="checkbox"
                    name="checkbox"
                  />
                </Form.Group>
                <Button
                  onClick={showAlert}
                  variant="primary"
                  type="submit"
                  className="butt"
                  name="button"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Contacts>
  );
}

const Contacts = styled.div`
  margin-bottom: 100px;

  .holder {
    border: 1px solid #4169e1;
    border-radius: 30px;
    width: 500px;
    margin-top: 100px;
    margin-left: 20px;
    padding-left: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .holder {
      border: 1px solid #4169e1;
      border-radius: 30px;
      width: 300px;
      margin-top: 100px;
      margin-left: 20px;
      padding-left: 40px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .holder {
      border: 1px solid #4169e1;
      border-radius: 30px;
      width: 300px;
      margin-top: 100px;
      margin-left: 20px;
      padding-left: 40px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  .contact {
    width: 250px;
    border-radius: 20px;
    height: 30px;
    margin-left: 100px;
    border-color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .contact {
      width: 250px;
      border-radius: 20px;
      height: 30px;
      margin-left: -10px;
      border-color: #4169e1;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .contact {
      width: 250px;
      border-radius: 20px;
      height: 30px;
      margin-left: -10px;
      border-color: #4169e1;
    }
  }

  .contactpass {
    width: 250px;
    border-radius: 20px;
    height: 30px;
    margin-left: 90px;
    margin-top: 30px;
    border-color: #4169e1;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .contactpass {
      width: 250px;
      border-radius: 20px;
      height: 30px;
      margin-left: -10px;
      border-color: #4169e1;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .contactpass {
      width: 250px;
      border-radius: 20px;
      height: 30px;
      margin-left: -10px;
      border-color: #4169e1;
    }
  }

  .checkbox {
    width: 150px;
    height: 40px;
  }
  .butt {
    width: 250px;
    margin-left: -20px;
    border-radius: 20px;
    height: 30px;
    border-color: #4169e1;
  }
  .username {
    width: 250px;
    border-radius: 20px;
    height: 30px;
    margin-left: 60px;
    border-color: #4169e1;
    margin-bottom: 28px;
    margin-left: 50px;
  }
  .checkbox {
    margin-left: 120px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .checkbox {
      margin-left: 80px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .checkbox {
      margin-left: 80px;
    }
  }
  .textarea {
    height: 150px;
    border-color: #4169e1;
    width: 340px;
    margin-left: 60px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .textarea {
      height: 150px;
      border-color: #4169e1;
      width: 200px;
      margin-left: 20px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .textarea {
      height: 150px;
      border-color: #4169e1;
      width: 200px;
      margin-left: 20px;
    }
  }

  .lables {
    color: #4169e1;
  }
`;
