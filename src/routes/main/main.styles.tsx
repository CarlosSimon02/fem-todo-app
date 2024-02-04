import styled from 'styled-components';

import { fluidSizeMobileToDesktop } from '../../styles/fluidSize';
import pxToRem from '../../styles/pxToRem';

export const StyledMainWrapper = styled.div`
  width: calc(100vw - ${pxToRem(48)});
  max-width: ${pxToRem(584)};
  margin-inline: auto;
  margin-block-start: ${fluidSizeMobileToDesktop(48, 70)};
  padding-inline: ${pxToRem(24)};
`;
