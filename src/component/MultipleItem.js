import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Html from '../img/html.png';
import Logo from '../img/logo.jpg';
import Mernstack from '../img/mernstack.png';
import Next from '../img/nextjs.png';
import Photoshop from '../img/photoshop.png';
import Ractss from '../img/ractss.png';
import Reactsss from '../img/react.png';
import Strapi from '../img/strapi.png';
import Styledcomp from '../img/styledcomp.png';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
    };
    return (
      <Multi>
        <Slider {...settings} className="sliderss">
          <div className="holder">
            <img src={Html} alt="firstimage " className="images" />
          </div>
          <div className="holder">
            <img src={Logo} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <img src={Mernstack} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <img src={Photoshop} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <img src={Next} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <img src={Ractss} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <h3>
              <img src={Reactsss} alt="firstimage" className="images" />
            </h3>
          </div>
          <div className="holder">
            <img src={Strapi} alt="firstimage" className="images" />
          </div>
          <div className="holder">
            <img src={Styledcomp} alt="firstimage" className="images" />
          </div>
        </Slider>
      </Multi>
    );
  }
}

const Multi = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  @media only screen and (max-width: 360px) {
    margin-left: 0px;
    margin-top: 100px;
  }
  .holder {
    width: px;
    height: 200px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .holder {
      width: px;
      height: 200px;
      margin-left: 0px;
      margin-right: -300px;
      margin-top: 100px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .holder {
      width: px;
      height: 200px;
      margin-left: 0px;
    }
  }

  .images {
    width: 150px;
    height: 150px;
    border-radius: 20px;
  }
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    .images {
      width: 70px;
      height: 70px;
      border-radius: 70px;
      margin-left: 0px;
    }
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    .images {
      width: 85px;
      height: 85px;
      border-radius: 85px;
      margin-left: 0px;
    }
  }

  .sliderss {
    margin-left: 100px;
  }
  @media only screen and (max-width: 360px) {
    .sliderss {
      margin-left: 30px;
    }
  }
  @media only screen and (max-width: 414px) {
    .sliderss {
      margin-left: 60px;
    }
  }
`;
