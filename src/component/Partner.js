import React from 'react';
import styled from 'styled-components';
import Html from '../img/html.png';
function Partner() {
  return (
    <Part>
      <img src={Html} alt="hiiii" widith={200} height={100} />
    </Part>
  );
}

export default Partner;

const Part = styled.div`
  margin-left: 400px;
  margin-top: 50px;
`;
