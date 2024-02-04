import styled from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/icon-moon.svg';
import pxToRem from '../../styles/pxToRem';

export const StyledThemeSwitcherButton = styled.button`
  cursor: pointer;
  width: ${pxToRem(26)};
  height: ${pxToRem(26)};
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const StyledMoonIcon = styled(MoonSVG)`
  width: 100%;
  height: 100%;
`;
