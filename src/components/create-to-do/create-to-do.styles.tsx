import styled from 'styled-components';

import ItemBox from '../../styles/common/itemBox';
import MainBox from '../../styles/common/mainBox';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';

export const StyledCreateToDoContainer = styled.div`
  position: relative;
`;

export const StyledCreateToDoInput = styled.input`
  ${ItemBox}
  ${MainBox}
  border: none;
  width: 100%;
  padding-inline-start: ${fluidSizeMobileToDesktop(52, 72)};
  caret-color: ${({ theme }) => theme.color.accent.main};

  &::placeholder {
    color: ${({ theme }) => theme.color.inputText.placeholder};
    opacity: 1;
  }
`;
