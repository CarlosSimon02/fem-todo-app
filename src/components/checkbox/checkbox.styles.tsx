import { motion } from 'framer-motion';
import styled from 'styled-components';

import FillContainer from '../../styles/common/fillContainer';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const lightblue = 'hsl(192, 100%, 66.66666666666666%)';

export const CheckContainerSVG = styled.svg`
  ${FillContainer}
  stroke: ${({ theme }) => theme.color.checkbox.border};
`;

export const CheckIndicatorCircleSVG = styled.svg`
  ${FillContainer}
`;

export const AnimatedCheckCircleContainer = motion(styled.div`
  ${FillContainer}
  overflow: hidden;
  border-radius: 100%;
  box-shadow: inset 0 0 0 2rem ${lightblue};
`);

export const AnimatedGradient = motion(styled.div`
  ${FillContainer};
  border-radius: 100%;
  background-image: linear-gradient(to bottom right, transparent, hsl(280.26, 86.59%, 64.9%));
`);

export const CheckIconSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${pxToRem(9)};
  height: ${pxToRem(7)};
  z-index: 10;
`;
export const StyledCheckboxButton = styled.button`
  cursor: pointer;
  width: ${pxToRem(21)};
  height: ${pxToRem(21)};
  position: absolute;
  left: ${pxToRem(20)};
  top: ${fluidSizeMobileToDesktop(16, 20)};
  border-radius: 100%;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover ${CheckContainerSVG} {
    stroke: ${({ theme }) => theme.color.mainBox.text};
  }
`;
