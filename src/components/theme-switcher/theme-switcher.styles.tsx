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
`;

const StyledIcon = css`
  width: 100%;
  height: 100%;
`;

export const StyledMoonIcon = styled(MoonSVG)`
  ${StyledIcon}
`;

export const StyledSunIcon = styled(SunSVG)`
  ${StyledIcon}
`;
