import styled, { css } from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/icon-moon.svg';
import { ReactComponent as SunSVG } from '../../assets/icon-sun.svg';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledThemeSwitcherButton = styled.button`
  cursor: pointer;
  width: ${pxToRem(26)};
  height: ${pxToRem(26)};
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  /* transition: rotate 1s ease-out;

  &:hover {
    rotate: -110deg;
    transition: rotate 0.2s ease-out;
  } */
`;

const StyledIcon = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledMoonIcon = styled(MoonSVG)`
  ${StyledIcon}
`;

export const StyledSunIcon = styled(SunSVG)`
  ${StyledIcon}
`;
