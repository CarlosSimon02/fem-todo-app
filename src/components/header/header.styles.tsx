import styled from 'styled-components';

import { fluidSizeMobileToDesktop } from '../../styles/fluidSize';
import FONT_WEIGHTS from '../../styles/font-weights';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h1`
  font-size: ${fluidSizeMobileToDesktop(27, 40)};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: 0.375em;
  color: white;
`;
