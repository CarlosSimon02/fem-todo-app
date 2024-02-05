import BGImage from '../../components/bg-image/bg-image.component';
import Header from '../../components/header/header.component';
import Home from '../home/home.route';
import { StyledMainWrapper } from './main.styles';

const Main = () => {
  return (
    <>
      <BGImage />
      <StyledMainWrapper>
        <Header />
        <Home />
      </StyledMainWrapper>
    </>
  );
};

export default Main;
