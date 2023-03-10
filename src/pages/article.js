import React from 'react';
import Article from '../component/Articles';
import Header from '../component/Header';
import NavBartwo from '../component/NavBars';
import Footer from '../component/Footer';
import styled from 'styled-components';
export default function article() {
  return (
    <Blocks>
      <NavBartwo />
      <Article />
      <div className="outfooter">
        <Footer />
      </div>
    </Blocks>
  );
}

const Blocks = styled.div`
  overflow-x: hidden;
  .body-conta {
    margin-top: 23px;
  }
  .outfooter {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    width: 1800px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .outfooter {
      margin-top: 0px;
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
    }
  }
`;
