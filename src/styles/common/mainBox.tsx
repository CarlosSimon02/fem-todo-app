import { css } from 'styled-components';

import pxToRem from '../functions/pxToRem';

const MainBox = css`
  background-color: ${({ theme }) => theme.color.mainBox.background};
  color: ${({ theme }) => theme.color.mainBox.text};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 ${pxToRem(35)} ${pxToRem(50)} ${pxToRem(-15)} ${({ theme }) => theme.color.mainBox.boxShadow};
`;

export default MainBox;
