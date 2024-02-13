import styled from 'styled-components';

import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledHomeContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: stretch;
  gap: ${pxToRem(16)};
`;

export const StyledDNDIndicator = styled.p`
  text-align: center;
  margin-top: ${fluidSizeMobileToDesktop(24, 33)};
`;
