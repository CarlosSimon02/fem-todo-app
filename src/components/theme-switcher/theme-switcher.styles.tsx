import styled from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/icon-moon.svg';
import { ReactComponent as SunSVG } from '../../assets/icon-sun.svg';
import FillContainer from '../../styles/common/fillContainer';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledThemeSwitcherButton = styled.button`
  cursor: pointer;
  width: ${pxToRem(26)};
  height: ${pxToRem(26)};
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
`;

export const StyledMoonIcon = styled(MoonSVG)`
  ${FillContainer}
`;

export const StyledSunIcon = styled(SunSVG)`
  ${FillContainer}
`;
