import React from 'react';
import styled from 'styled-components';
export default function MultipleItem() {
  return (
    <Tit>
      <div className="newss">
        <h1 c>Partner</h1>
      </div>
    </Tit>
  );
}

const Tit = styled.div`
  margin-left: 450px;
  margin-top: 50px;
  .newss {
    margin-left: -500px;
  }
`;
