import styled from 'styled-components';

import MainBox from '../../styles/common/mainBox';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledToDoListContainer = styled.div`
  ${MainBox}
  overflow: clip;
  background-color: ${({ theme }) => theme.color.toDoList.background};
  display: grid;
  gap: ${pxToRem(1)};
`;

export const StyledControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.mainBox.background};
  padding-inline: ${fluidSizeMobileToDesktop(20, 24)};
  padding-block: ${pxToRem(20)};
  font-size: ${fluidSizeMobileToDesktop(12, 14)};

  & > * {
    width: fit-content;
  }
`;
