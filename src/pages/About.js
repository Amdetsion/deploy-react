import React from 'react';
import Tabs from '../component/Tabs';
import Headers from '../component/Header';
import NavBars from '../component/NavBars';
import Footer from '../component/Footer';
import styled from 'styled-components';

export default function About() {
  return (
    <Abo>
      <NavBars />

      <Tabs />

      <div className="outfooter">
        <Footer />
      </div>
    </Abo>
  );
}

const Abo = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
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
