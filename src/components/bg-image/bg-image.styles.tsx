import styled from 'styled-components';

import bgImageJPG from '../../assets/bg-desktop-light.jpg';
import { fluidSizeMobileToDesktop } from '../../styles/fluidSize';

export const StyledBGImage = styled.div`
  width: 100%;
  height: ${fluidSizeMobileToDesktop(200, 300)};
  background: url(${bgImageJPG}) no-repeat center;
  background-size: auto 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
`;
