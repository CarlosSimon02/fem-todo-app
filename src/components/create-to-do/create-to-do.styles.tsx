import styled from 'styled-components';

import ItemBox from '../../styles/common/itemBox';
import MainBox from '../../styles/common/mainBox';

export const StyledCreateToDoContainer = styled.div`
  position: relative;
`;

export const StyledCreateToDoInput = styled.input`
  border: none;
  ${ItemBox}
  ${MainBox}
`;
