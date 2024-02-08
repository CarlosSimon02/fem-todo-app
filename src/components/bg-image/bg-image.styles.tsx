import styled, { css } from 'styled-components';

import bgImageDarkJPG from '../../assets/bg-desktop-dark.jpg';
import bgImageLightJPG from '../../assets/bg-desktop-light.jpg';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';

export const StyledBGImageContainer = styled.div`
  width: 100%;
  height: ${fluidSizeMobileToDesktop(200, 300)};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
`;

const StyledImage = css`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LightModeImage = styled.div`
  ${StyledImage}
  background-image: url(${bgImageLightJPG});
`;

export const DarkModeImage = styled.div`
  ${StyledImage}
  background-image: url(${bgImageDarkJPG});
`;
