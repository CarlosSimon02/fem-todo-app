import styled from 'styled-components';

import bgImageJPG from '../../assets/bg-desktop-light.jpg';
import { BREAKPOINTS } from '../../styles/breakpoints';
import fluidSize from '../../styles/fluidSize';

export const StyledBGImage = styled.div`
  width: 100%;
  height: ${fluidSize(100, 300, BREAKPOINTS.UP.MOBILE, BREAKPOINTS.UP.DESKTOP)};
  background: url(${bgImageJPG}) no-repeat center;
  background-size: auto;
`;
