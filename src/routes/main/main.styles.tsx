import styled from 'styled-components';

import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledMainWrapper = styled.div`
  width: calc(100vw - ${pxToRem(48)});
  max-width: ${pxToRem(584)};
  margin-inline: auto;
  margin-block-start: ${fluidSizeMobileToDesktop(48, 70)};
  margin-block-end: ${pxToRem(40)};
`;
