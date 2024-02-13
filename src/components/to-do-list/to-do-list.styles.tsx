import styled from 'styled-components';

import LinkButton from '../../styles/common/linkButton';
import MainBox from '../../styles/common/mainBox';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

const mainGap = pxToRem(1);

export const StyledToDoListContainer = styled.div`
  ${MainBox}
  overflow: clip;
  background-color: ${({ theme }) => theme.color.toDoList.background};
  display: grid;
  gap: ${mainGap};
`;

export const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${mainGap};
`;

export const StyledControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.mainBox.background};
  padding-inline: ${fluidSizeMobileToDesktop(20, 24)};
  padding-block: ${pxToRem(20)};
  font-size: ${fluidSizeMobileToDesktop(12, 14)};
  position: relative;

  & > * {
    width: fit-content;
  }
`;

export const StyledClearCompletedButton = styled.button`
  ${LinkButton}
`;

// export const StyledFilterBar = styled(FilterBar)`
//   position: absolute;
//   top: 50%;
//   left: 50;
//   transform: translate(-50%, -50%);
// `;
