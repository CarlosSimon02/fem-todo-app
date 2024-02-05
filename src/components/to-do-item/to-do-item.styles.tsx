import styled from 'styled-components';

import ItemBox from '../../styles/common/itemBox';

export const StyledToDoItemContainer = styled.div`
  ${ItemBox}
  position: relative;
  background-color: ${({ theme }) => theme.color.mainBox.background};
`;
