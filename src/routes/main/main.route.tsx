import BGImage from '../../components/bg-image/bg-image.component';
import Header from '../../components/header/header.component';
import { StyledMainWrapper } from './main.styles';

const Main = () => {
  return (
    <>
      <BGImage />
      <StyledMainWrapper>
        <Header />
      </StyledMainWrapper>
    </>
  );
};

export default Main;
