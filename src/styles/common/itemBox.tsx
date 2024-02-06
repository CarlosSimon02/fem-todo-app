import { css } from 'styled-components';

import { fluidSizeMobileToDesktop } from '../functions/fluidSize';

const ItemBox = css`
  font-size: ${fluidSizeMobileToDesktop(12, 18)};
  padding-block: ${fluidSizeMobileToDesktop(16, 20)};
  padding-inline: ${fluidSizeMobileToDesktop(20, 24)};
  text-overflow: ellipsis;
  line-height: 1.5;
`;

export default ItemBox;
