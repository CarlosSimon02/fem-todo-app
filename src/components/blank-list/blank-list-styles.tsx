import styled from 'styled-components';

import pxToRem from '../../styles/functions/pxToRem';

export const StyledBlankListContainer = styled.div`
  width: 100%;
  padding: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(10)};

  & > p {
    font-size: ${pxToRem(12)};
    color: ${({ theme }) => theme.color.inputText.placeholder};
  }
`;
