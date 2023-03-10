import React from 'react';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from '@react-aria/ssr';
import styled from 'styled-components';
import Letter from '../component/Letter';
import NavBars from '../component/NavBars';
import Carousal from '../component/Carousal';
import Welcome from '../component/Welcome';
import CarousalHolder from '../component/CarousalHolder';
import News from '../component/News';
import Resizable from '../component/Resizable';
import WithLabelExample from '../component/Withlab';
import Headers from '../component/Header';
import NewsTitle from '../component/NewsTitle';
import Partner from '../component/Partner';
import Footer from '../component/Footer';
import Iconse from '../component/iconse';
import ProjectTitle from '../component/ProjectTitle';
import Countups from '../component/Countups';
import MultipleItemTitle from '../component/MultipleTitle';
import MultipleItem from '../component/MultipleItem';
export default function Home() {
  return (
    <Blocks>
      <NavBars />
      <Container className="body-conta">
        <Carousal />
        <Letter />
        <NewsTitle />
        <News />
        <ProjectTitle />
        <Countups />
        <MultipleItemTitle />
        <MultipleItem />
      </Container>

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
