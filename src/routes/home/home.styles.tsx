import styled from 'styled-components';

import pxToRem from '../../styles/functions/pxToRem';

export const StyledHomeContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: stretch;
  gap: ${pxToRem(16)};
`;
