import styled, { css } from 'styled-components';

import bgImageDarkJPG from '../../assets/bg-desktop-dark.jpg';
import bgImageLightJPG from '../../assets/bg-desktop-light.jpg';
import FillContainer from '../../styles/common/fillContainer';
import { BREAKPOINTS } from '../../styles/constants/breakpoints';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToEm from '../../styles/functions/pxToEm';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledBGImageContainer = styled.div`
  width: 100%;
  height: ${fluidSizeMobileToDesktop(200, 300)};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
  overflow: hidden;

  @media (min-width: ${pxToEm(BREAKPOINTS.UP.DESKTOP)}) {
    width: ${pxToRem(1350)};
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
  }
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
