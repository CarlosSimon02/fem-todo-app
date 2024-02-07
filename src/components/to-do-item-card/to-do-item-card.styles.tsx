import styled from 'styled-components';

import ItemBox from '../../styles/common/itemBox';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';

export const StyledToDoItemCardContainer = styled.div`
  ${ItemBox}
  position: relative;
  background-color: ${({ theme }) => theme.color.mainBox.background};
  padding-inline: ${fluidSizeMobileToDesktop(52, 72)};
  text-overflow: ellipsis;
  overflow: hidden;

  &.done {
    text-decoration: line-through;
    color: ${({ theme }) => theme.color.itemBox.doneText};
  }
`;
