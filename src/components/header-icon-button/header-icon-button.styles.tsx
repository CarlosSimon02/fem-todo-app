import styled from 'styled-components';

import pxToRem from '../../styles/functions/pxToRem';

export const StyledButton = styled.button`
  cursor: pointer;
  width: ${pxToRem(26)};
  height: ${pxToRem(26)};
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
`;
