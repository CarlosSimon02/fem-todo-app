import styled from 'styled-components';

import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';

export const StyledBGImage = styled.div`
  width: 100%;
  height: ${fluidSizeMobileToDesktop(200, 300)};
  background: url(${({ theme }) => theme.bgImage}) no-repeat center;
  background-size: auto 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
`;
