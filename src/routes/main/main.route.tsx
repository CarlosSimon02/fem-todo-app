import { Route, Routes } from 'react-router-dom';

import BGImage from '../../components/bg-image/bg-image.component';
import About from '../about/about.route';
import Header from '../header/header.route';
import Home from '../home/home.route';
import { StyledMainWrapper } from './main.styles';

const Main = () => {
  return (
    <>
      <BGImage />
      <StyledMainWrapper>
        <Routes>
          <Route path="/*" element={<Header />}>
            <Route index element={<Home />} />
            <Route path=":about" element={<About />} />
          </Route>
        </Routes>
      </StyledMainWrapper>
    </>
  );
};

export default Main;
