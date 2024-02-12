import styled, { css } from 'styled-components';

import bgImageDarkJPG from '../../assets/bg-desktop-dark.jpg';
import bgImageLightJPG from '../../assets/bg-desktop-light.jpg';
import FillContainer from '../../styles/common/fillContainer';
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
  ${FillContainer}
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
`;

export const LightModeImage = styled.div`
  ${StyledImage}
  background-image: url(${bgImageLightJPG});
`;

export const DarkModeImage = styled.div`
  ${StyledImage}
  background-image: url(${bgImageDarkJPG});
`;
