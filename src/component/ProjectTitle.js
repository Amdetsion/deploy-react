import React from 'react';
import styled from 'styled-components';
export default function ProjectTitle() {
  return (
    <Tit>
      <div className="newss">
        <h1 className="projecthead">NUMBER OF PROJECT</h1>
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
  .projecthead {
    color: #4169e1;
  }
`;
