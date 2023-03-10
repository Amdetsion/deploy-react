import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import styled from 'styled-components';

export default function Articles() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 100,
      once: false,
    });
    window.addEventListener(
      'touchmove',
      () => {
        AOS.refresh();
      },
      false
    );
  });
  return (
    <Art>
      <div>
        <Container>
          <Row>
            <Col sm={12} data-aos="zoom-in">
              <h1 className="titleone">TITLE</h1>
              <p className="paraone">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et (The Extremes of Good and
                Evil) by Cicero, written in 45 BC. This book is a treatise on
                the theory of ethics, very popular during the Renaissance. The
                first line of Lorem Ipsum, Lorem ipsum dolor sit amet., comes
                from a line in section 1.10.32.There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem
                Ipsum.Contrary to popular belief, Lorem Ipsum is not
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12} data-aos="zoom-in">
              <h1 className="titleone">TITLE</h1>
              <p className="paratwo">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Contrary to popular belief,
                Lorem Ipsum is not hidden in the middle of text. All the Lorem
                Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the
                Internet. It uses a dictionary of over 200 Latin words, combined
                with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable. The generated Lorem Ipsum is
                therefore always free from repetition, injected humour, or
                non-characteristic words etc.Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Contrary to popular belief,
                Lorem Ipsum is not
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} data-aos="zoom-in">
              <h1 className="titleone">TITLE</h1>
              <p className="parathree">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Contrary to popular belief,
                Lorem Ipsum is not standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.Contrary
                to popular belief, Lorem Ipsum is not
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Art>
  );
}

const Art = styled.div`
  .titleone {
    margin-left: 0px;
    color: #4169e1;
    margin-top: 50px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490) {
    .titleone {
      margin-left: 0px;
      color: #4169e1;
      margin-top: 50px;
    }
  }

  .paraone {
    text-indent: 60px;
    margin-top: 60px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .paraone {
      text-indent: 60px;
      margin-top: 60px;
      font-size: 9px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .paratwo {
    text-indent: 25px;
    margin-top: 30px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .paratwo {
      text-indent: 25px;
      margin-top: 30px;

      font-size: 9px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .parathree {
    text-indent: 25px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .parathree {
      text-indent: 25px;
      margin-top: 30px;
      margin-bottom: 40px;
      font-size: 9px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;
