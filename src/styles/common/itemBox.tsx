import { css } from 'styled-components';

import { fluidSizeMobileToDesktop } from '../functions/fluidSize';

const ItemBox = css`
  font-size: ${fluidSizeMobileToDesktop(12, 18)};
  padding-block: ${fluidSizeMobileToDesktop(16, 20)};
  padding-inline-end: ${fluidSizeMobileToDesktop(20, 24)};
  padding-inline-start: ${fluidSizeMobileToDesktop(52, 72)};
`;

export default ItemBox;
