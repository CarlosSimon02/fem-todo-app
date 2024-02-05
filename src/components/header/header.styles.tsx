import styled from 'styled-components';

import FONT_WEIGHTS from '../../styles/constants/font-weights';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: ${fluidSizeMobileToDesktop(40, 48)};
`;

export const StyledLogo = styled.h1`
  font-size: ${fluidSizeMobileToDesktop(27, 40)};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: 0.375em;
  color: white;
`;
