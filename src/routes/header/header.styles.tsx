import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FONT_WEIGHTS from '../../styles/constants/font-weights';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: ${fluidSizeMobileToDesktop(40, 48)};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${fluidSizeMobileToDesktop(27, 40)};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: 0.375em;
  color: white;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: ${pxToRem(15)};
`;
