import React from 'react';

import styled from 'styled-components';
import Photoshop from '../img/photoshop.png';
function NewsTitle() {
  return (
    <Tit>
      <div className="newss">
        <h1 className="newsheading">NEWS</h1>
      </div>
    </Tit>
  );
}

export default NewsTitle;

const Tit = styled.div`
  margin-left: 450px;
  margin-top: 150px;
  @media only screen and (min-width: 360px) and (max-width: 490px) {
    margin-left: 400px;
    margin-top: 100px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    margin-left: 400px;
    margin-top: 100px;
  }

  .newss {
    margin-left: -500px;
    margin-top: -60px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    newss {
      margin-left: 1000px;
      margin-top: 50px;
    }
  }
  .newsheading {
    color: #4169e1;
  }
`;
