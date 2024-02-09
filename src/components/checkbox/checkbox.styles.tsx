import styled, { css } from 'styled-components';

import { ReactComponent as CheckIcon } from '../../assets/icon-check.svg';
import { ReactComponent as CircleIcon } from '../../assets/icon-circle.svg';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0px 0px 0px 0px #56d0f5;
  overflow: hidden;
`;

const StyledCircleIcon = css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledDefaultCircleIcon = styled(CircleIcon)`
  ${StyledCircleIcon}
  stroke: ${({ theme }) => theme.color.checkbox.border};
`;

export const StyledCheckCircleIcon = styled(CircleIcon)`
  ${StyledCircleIcon}
  stroke: hsl(192, 100%, 66.66666666666666%);
  rotate: -90deg;
`;

export const StyledCheckIcon = styled(CheckIcon)`
  width: ${pxToRem(9)};
  height: ${pxToRem(7)};
  z-index: 10;
`;

export const StyledGradient = styled.div`
  ${StyledCircleIcon};
  border-radius: 100%;
  background-image: linear-gradient(to bottom right, transparent, hsl(280.26, 86.59%, 64.9%));
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

  &:hover ${StyledDefaultCircleIcon} {
    stroke: ${({ theme }) => theme.color.mainBox.text};
  }
`;
