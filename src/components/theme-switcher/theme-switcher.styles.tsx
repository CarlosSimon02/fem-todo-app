import styled from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/icon-moon.svg';
import { ReactComponent as SunSVG } from '../../assets/icon-sun.svg';
import FillContainer from '../../styles/common/fillContainer';

export const StyledMoonIcon = styled(MoonSVG)`
  ${FillContainer}
`;

export const StyledSunIcon = styled(SunSVG)`
  ${FillContainer}
`;
