import React, { Component } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mernstack from '../img/mernstack.png';
import styled from 'styled-components';
export default class Resizable extends Component {
  state = {
    display: true,
    width: 200,
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
    };
    return (
      <Rea>
        <div className="img-holder">
          <Slider {...settings}>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
            <div>
              <img
                className="d-block  img-car"
                src={Mernstack}
                alt="First slide"
                width={150}
                height={100}
              />
            </div>
          </Slider>
        </div>
      </Rea>
    );
  }
}

const Rea = styled.div`
  margin-left: 55px;
  margin-right: 55px;
  margin-top: 50px;

  .img-car {
    border-radius: 10px;
  }
  .img-holder {
    padding-top: 90px;
    padding-bottom: 50px;
    padding-left: 50px;
  }
`;
